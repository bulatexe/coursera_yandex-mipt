/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var seconds = hours * 3600 + minutes * 60 + interval * 60
    var h = Math.floor(seconds / 3600) % 24;
    var m =  Math.floor(seconds % 3600 / 60) % 60;

    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m)

};
