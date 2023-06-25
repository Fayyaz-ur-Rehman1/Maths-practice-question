// 1}

function calculatePercentage(value, total) {
    let percentage = (value / total) * 100;
    return percentage.toFixed(2) + "%";
}

console.log(calculatePercentage(75, 200));
console.log(calculatePercentage(40, 100));
console.log(calculatePercentage(5, 50));

// 2}

function numpercentage(value, total) {
    let percentage = value / total * 100;
    return percentage.toFixed(2) + "%"
}
console.log(numpercentage(20, 35));

// 3}

function decimalpercentage(value, total) {
    let percentage = value / total * 100
    return percentage.toFixed(2)
}

console.log(decimalpercentage(2.2, 3.7));

// 4}

function percentage1by5(value, total) {
    return value / total * 100 + "%"
}
console.log(percentage1by5(1, 5));

// 5}

function percentage1by2(value, total) {
    return value / total * 100 + "%"
}
console.log(percentage1by2(1, 2));