// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#calculatePrice").click(function () {
    let trainingRate = parseFloat($("#trainingRate").val());
    let hours = parseFloat($("#hours").val());
    if (hours >= 0) {
        let totalPrice = trainingRate * hours;
        $("#totalPrice").val(totalPrice);
    }
    else {
        alert("Please enter a positive integer.");

    }
})

