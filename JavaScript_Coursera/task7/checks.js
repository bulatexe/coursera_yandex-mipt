// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var date = require('./index.js');

var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');


assert.deepEqual(
    time.value,
    '2017-04-20 14:00',

    'Если к дате "2017-05-16 13:45" ' +
    'прибавить 24 часа, 3 дня и 15 минут, вычесть 1 месяц, ' +
    'то получится "2017-04-20 14:00"'
);

time = date('2018-02-02 12:45')
    .add(2, 'hours')
    .subtract(1, 'months')
    .add(4, 'days')
    .add(10, 'minutes');

assert.deepEqual(
    time.value,
    '2018-01-06 14:55',

    'Если к дате "2018-02-02 12:45" ' +
    'прибавить 2 часа, 4 дня и 10 минут, вычесть 1 месяц, ' +
    'то получится "2018-01-06 14:55"'
);



// assert.throws принимает функцию и
// проверяет, что она выбрасывает исключение определенного типа
assert.throws(
    function () {
        date('2017-05-16 13:45').add(2, 'light-years');
    },
    TypeError,

    'Если попытаться прибавить к дате световой год, ' +
    'то выбросится исключение TypeError'
);

assert.throws(
    function () {
        date('2017-05-16 13:45').add(-2, 'years');
    },
    TypeError,

    'Если попытаться передать в функцию add отрицательное число – выбросится исключение TypeError'
);

time = date('2016-04-03 15:00')
    .add(9, 'hours');

console.info(time.value)

time = date('2015-01-01 00:0')
    .add(5, 'minutes')
    .add(1, 'hours')
    .add(2, 'days')
    .add(3, 'months')
    .add(1, 'years');

console.info(time.value)    

console.info('OK!');
