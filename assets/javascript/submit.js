
// on click function for the submit button
$("#submit").on("click", function(event) {
    event.preventDefault();

    // taking in the value put in the ssn and dob inputs
    var ssn = $("#ssn-input").val().trim();
    var dob = $("#dob-input").val().trim();

    // if the ssn is empty, an alert asks the user to enter an ssn
    // if the dob is empty, an alert asks for the user to enter a dob
    // if neither are empty, an alert saying thank you pops up
    if (ssn == "") {
        alert("Please enter a valid ssn");
    } else if (dob == "") {
        alert("Please enter a valid dob");
    } else {
        alert("Thank you for your submission");
    }
});
