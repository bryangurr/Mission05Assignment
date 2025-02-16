// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Verify that the total number of hours is greater than 0
$("#calculatePrice").click(function () {
    let trainingRate = parseFloat($("#trainingRate").val());
    let hours = parseFloat($("#hours").val());
    if (hours >= 0) { // value is positive
        let totalPrice = trainingRate * hours;
        $("#totalPrice").val(totalPrice);
    }
    else { // value is not positive 
        alert("Please enter a positive integer.");

    }
})

