/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query(collection) {
    var collectionCopy = JSON.parse(JSON.stringify(collection));
    var argumentsQuery = Array.from(arguments).slice(1);
    var property,
        value,
        selectFields,
        resultCollection;

    if (collection.length === 0 || arguments.length === 0) {
        return collectionCopy
    }
    
    var commands = argumentsQuery.sort(function(a, b) {
        if (a[0] > b[0]) {
            return 1;
        }

        if (a[0] < b[0]) {
            return -1;
        }

        return 0
    }) 

    function filterCollection() {
        return commands.reduce(function(prevCollection, command) {
            if (command.includes('filterIn')) {
                property = command.slice(1)[0];
                value = command.slice(1)[1];
    
                return prevCollection.filter(function(item) {
                    return value.includes(item[property])
                })
            } else {
                selectFields = itemInObject(Object.keys(collectionCopy[0]), command.slice(1)[0]);

                return prevCollection.map(function(item) {
                    return selectFilter(item, selectFields)
                })
            }
        }, collectionCopy);
    }

    resultCollection = filterCollection()

    for (var key in resultCollection[0]) {
        if (resultCollection[0][key] === undefined) {
            return []
        }
    }

    return resultCollection

}

/**
 * @params {String[]}
 */
function select() {
    var fields = Array.from(arguments);

    return ['select', fields]
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', property, values]
}

function selectFilter(obj, keys) {
    return keys.reduce(function(a, key) {
        return a[key] = obj[key], a
    }, {});
}

function itemInObject(keysObj, arr) {
    if (arr.length === 0) {
        return keysObj
    }

    return arr.filter(function(item) {
        return keysObj.includes(item)
    })
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
