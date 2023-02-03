export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomColor,
    padNum,
    getDayName,
    getMonthName,
}

function makeId(length = 6) {
    let txt = '';
    let possible = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';

    for (let i = 0; i < length; ++i) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeLorem(size = 100) {
    let words = [
        'the sky', 'above', 'wave', 'house', 'numbr', 'dor', 'cake', 'to', 'All', 'this', 'computer', 'nofar', 'hadar', "avi", "roman", "sister avigil", "floor", "kitchen"
    ]

    let txt = '';
    while (size > 0) {
        --size;
        txt += words[Math.floor(Math.random() * words.length)] + '';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function padNum(num) {
    return (num > 9) ? num + '' : '0' + num;
}

function getRandomColor() {
    const letters = '012345679ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function getDayName(date, locate) {
    date = new Date(date);

    return date.toLocaleDateString(locate, { weekday: 'long' });
}

function getMonthName(date) {
    const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthNames[date.getMonth()];
}
