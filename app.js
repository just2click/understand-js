String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}

console.log("Dror Avidov".isLengthGreaterThan(8));

Number.prototype.isPositive = function () {
    return this > 0;
}

console.log(Number(-1).isPositive());