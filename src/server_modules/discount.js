let getFixedDiscount = function (total) {
    if (total >= 100 && total < 400) {
        return 10;
    } else if (total >= 400 && total < 1000) {
        return 50;
    } else if (total >= 1000) {
        return 200;
    }
}

let getFlatDiscount = function (total) {
    return (total * 30 / 100)
}

let getProgressiveDiscount = function (total) {
    if (total >= 50000) {
        return total * 15 / 100;
    } else if (total >= 10000) {
        return total * 10 / 100;
    } else if (total >= 7000) {
        return total * 7 / 100;
    } else if (total >= 5000) {
        return total * 5 / 100;
    } else if (total >= 1000) {
        return total * 3 / 100;
    }
}

let getNoDiscount = function (total) {
    return 0;
}

let DiscountTypes = {
    "NO_DISCOUNT": getNoDiscount,
    "PROGRESSIVE_DISCOUNT": getProgressiveDiscount,
    "FLAT_DISCOUNT": getFlatDiscount,
    "FIXED_DISCOUNT": getFixedDiscount
};

module.exports = {
    calculateDiscount: function (discount, total) {
        console.log(discount);
        discount = discount.toUpperCase();
        console.log(discount);
        if (!DiscountTypes.hasOwnProperty(discount)) {
            return -1;
        } else {
            return DiscountTypes[discount](total);
        }
    }
}
