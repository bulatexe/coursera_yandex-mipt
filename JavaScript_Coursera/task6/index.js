// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    devideCommand = command.split(' ');

    function addPhone (name, phones) {
        for (var names in phoneBook) {
            if (names === name) {
                var phonesToAdd =  phones.split(',')
                for (var i = 0; i < phonesToAdd.length; i++){
                    phoneBook[names].push(phonesToAdd[i])
                }
                return phoneBook[names]
            }
        }
        phoneBook[name] = phones.split(',')
    }

    function removePhone(phone) {
        for (var names in phoneBook) {
            for (var i = 0; i < phoneBook[names].length; i++) {
                if (phone === phoneBook[names][i]){
                    phoneBook[names].splice(i, 1)
                    if (phoneBook[names].length === 0) {
                        delete phoneBook[names]
                    }
                    return true
                }
            }
        }

        return false
    }

    if (command.indexOf('ADD') !== -1) {
       addPhone(devideCommand[1], devideCommand[2])
    }
    
    if (command.indexOf('SHOW') !== -1) {
        var phoneBookShow = [];
        var phoneBookSort = {};

        Object.keys(phoneBook).sort().forEach(function(key){
            phoneBookSort[key] = phoneBook[key]
        });

        for (var names in phoneBookSort) {
            phoneBookShow.push(names + ': ' + phoneBookSort[names].join(', '))
        }

        return phoneBookShow
    }

    if (command.indexOf('REMOVE_PHONE') !== -1) {
       return removePhone(devideCommand[1])
    }

};
