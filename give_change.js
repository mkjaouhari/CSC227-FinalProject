
var money = function (id) {
    return document.getElementById(id);
}

function calculateExactChange () {
    var amount = money("amount").value;
    var bill_amount = Math.floor(amount);
    var coin_amount = Math.floor((Math.round((amount - bill_amount) * 100) / 100) * 100);

    calculateBills(bill_amount);
    calculateCoins(coin_amount);
}

function calculateBills (bill_amount) {

    var hundreds = 0;
    var fifties = 0;
    var twenties = 0;
    var tens = 0;
    var fives = 0;
    var ones = 0;

    if (Math.floor(bill_amount / 100) > 0) {
        hundreds = Math.floor(bill_amount / 100);
        bill_amount -= hundreds * 100;
    }

    if (Math.floor(bill_amount / 50) > 0) {
        fifties = Math.floor(bill_amount / 50);
        bill_amount -= fifties * 50;
    }

    if (Math.floor(bill_amount / 20) > 0) {
        twenties = Math.floor(bill_amount / 20);
        bill_amount -= twenties * 20;
    }

    if (Math.floor(bill_amount / 10) > 0) {
        tens = Math.floor(bill_amount / 10);
        bill_amount -= tens * 10;
    }

    if (Math.floor(bill_amount / 5) > 0) {
        fives = Math.floor(bill_amount / 5);
        bill_amount -= fives * 5;
    }

    if (Math.floor(bill_amount / 1) > 0) {
        ones = Math.floor(bill_amount / 1);
        bill_amount -= ones * 1;
    }

    money("hundred").value = hundreds.toString();
    money("fifty").value = fifties.toString();
    money("twenty").value = twenties.toString();
    money("ten").value = tens.toString();
    money("five").value = fives.toString();
    money("one").value = ones.toString();
}

function calculateCoins (coin_amount) {

    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    if (Math.floor(coin_amount / 25) > 0) {
        quarters = Math.floor(coin_amount / 25);
        coin_amount -= quarters * 25;
    }

    if (Math.floor(coin_amount / 10) > 0) {
        dimes = Math.floor(coin_amount / 10);
        coin_amount -= dimes * 10;
    }

    if (Math.floor(coin_amount / 5) > 0) {
        nickels = Math.floor(coin_amount / 5);
        coin_amount -= nickels * 5;
    }

    if (Math.floor(coin_amount / 1) > 0) {
        pennies = Math.floor(coin_amount / 1);
        coin_amount -= pennies * 1;
    }

    money("quarter").value = quarters.toString();
    money("dime").value = dimes.toString();
    money("nickel").value = nickels.toString();
    money("penny").value = pennies.toString();
}