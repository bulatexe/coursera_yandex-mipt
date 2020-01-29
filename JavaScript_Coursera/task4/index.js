/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var hastags = []

    tweet.split(' ').forEach(function(item) {
        if (item[0] === '#') {
            hastags.push(item.slice(1));
        }
    });

    return hastags
};
