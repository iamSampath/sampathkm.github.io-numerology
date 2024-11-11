$(function() {
    $("#dob").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:" + new Date().getFullYear()
    });
});

function checkDOB() {
    const dobInput = $("#dob").val();
    const dobParts = dobInput.split("/");

    if (dobParts.length !== 3) {
        document.getElementById("result").innerHTML = "Invalid date format.";
        return;
    }

    const day = parseInt(dobParts[1]);
    const month = parseInt(dobParts[0]);
    const year = parseInt(dobParts[2]);

    // Basic validation (can be more robust)
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        document.getElementById("result").innerHTML = "Invalid date. Please select a valid date.";
        return;
    }

    // You can add more specific date validation logic here, such as checking for leap years, valid day ranges for each month, etc.

    document.getElementById("result").innerHTML = "You entered: " + dobInput;
}