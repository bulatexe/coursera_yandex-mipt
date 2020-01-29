/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    hashtags.forEach(function(item, index) {
        hashtags[index] = item.toLowerCase();
    });

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    hashtags = hashtags.filter(onlyUnique);

    var resultString = hashtags.join(', ');

    return resultString
};


