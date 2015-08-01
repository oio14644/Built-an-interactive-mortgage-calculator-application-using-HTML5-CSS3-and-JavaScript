//This method calculates the monthly payment.
/*
 @param r - the annual interest rate, expressed as a percentage
 @param N - the number of monthly payments
 @param P - the amount borrowed
 */

function calculateMortgage(r, N, P) {
    var monthlyPayments = null;
    //convert the percentage to a decimal
    r = r / 12 / 100;
    monthlyPayments = r * P / (1 - Math.pow((1 + r), -N));
    return monthlyPayments.toFixed(2);
}

function postPayments(payment) {
    var money = document.getElementById("outMonthly");
    money.innerText = payment;
}

//This method fetches the input values and then calculates the monthlyPayments and outputs the results
var btn = document.getElementById("btnCalculate");
btn.onclick = function () {
    var totalPrice = document.getElementById("totalPrice").value;
    if (totalPrice == "") {
        alert("Please Enter the Total Price");
        return false;
    }
    if (totalPrice < 0) {
        alert("Invalid Input");
        return false;
    }
    var downPayment = document.getElementById("downPayment").value;
    var interest = document.getElementById("interest").value;
    var period = document.getElementById("period").value;
    var moneyBorrowed = totalPrice - downPayment;
    var monthlyPayments = calculateMortgage(interest, period, moneyBorrowed);
    postPayments(monthlyPayments);
};
