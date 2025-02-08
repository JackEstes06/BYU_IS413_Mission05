// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#btnCalc").click(function (event) {
    var totalCost = $("#costHrs").val() * $("#numHrs").val();
    totalCost >= 0 
        ? alert(`Hark! Thou hast incurred a cost of ${totalCost} schmeckles, noble player. Pay thy dues and proceed with thine training. The path of mastery is not free, but thy skill shall flourish!`) 
        : alert(`Please enter a valid number of hours (i.e. 5)`);
});

function validateInput(input) {
    // Replace any non-digit character (including decimals) with an empty string
    input.value = input.value.replace(/[^0-9]/g, '');

    // Ensure the number is not negative
    if (input.value < 0) {
        input.value = 0;
    }
}