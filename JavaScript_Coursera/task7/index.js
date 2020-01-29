/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

    function timeManagment(date, number, dateType, operation) {
        
        if (dateType === 'years') {
            return date.setFullYear(date.getFullYear() + number * (operation + 1));
        }

        if (dateType === 'months') {
            return date.setMonth(date.getMonth() + number * (operation + 1))
        }

        if (dateType === 'days') {
            return date.setDate(date.getDate() + number * (operation + 1));
        }

        if (dateType === 'hours') {
            return date.setHours(date.getHours() + number * (operation + 1))
        }

        if (dateType === 'minutes') {
            return date.setMinutes(date.getMinutes() + number * (operation + 1));
        }
    }

    var formatNumber = function(number) {
        return number < 10 ? "0" + number : number;
      };

    var formatDate = function(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();

        return year + '-' + formatNumber(month) + '-' + formatNumber(day) + ' ' + formatNumber(hours) + ':' + formatNumber(minutes);
    }  

    var showError = function(number, dateType) {
        if (isNaN(number) || number < 0) {
            throw new TypeError('Передано отрицацельное число')
        }

        if (['years', 'months', 'days', 'hours', 'minutes'].indexOf(dateType) === -1) {
            throw new TypeError('Передано неверное значение')
        }
    }

    return {
        date: new Date(date),
        add: function(number, dateType) {
            showError(number, dateType)
            this.date = timeManagment(new Date(this.date), number, dateType, '+')
            return this
        },
        subtract: function(number, dateType) {
            showError(number, dateType)
            this.date = timeManagment(new Date(this.date), number, dateType, '-')
            return this;
        },
        get value() {
            return  formatDate(new Date(this.date));
        }
    }


};
