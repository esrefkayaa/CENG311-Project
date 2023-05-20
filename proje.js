
// Faculties array
var allFaculties = [
    "Dentistry",
    "Aviation and Space Sciences",
    "Law",
    "Humanities and Social Sciences",
    "Islamic Sciences",
    "Business",
    "Architecture and Fine Arts",
    "Engineering and Natural Sciences",
    "Health Sciences",
    "Political Sciences",
    "Sport Sciences",
    "Medicine",
    "Conservatory"
];

// Departments array
var allDepartments = [
    // Faculty of Dentistry
    "Dentistry",

    // Faculty of Aviation and Space Sciences
    "Aviation Management",
    "Aerospace Engineering",

    // Faculty of Law
    "Law",

    // Faculty of Humanities and Social Sciences
    "Psychology",
    "Sociology",
    "History",
    "Turkish Language and Literature",

    // Faculty of Islamic Sciences
    "Islamic Theology",

    // Faculty of Business
    "Business Administration",
    "Economics",

    // Faculty of Architecture and Fine Arts
    "Architecture",
    "Interior Architecture and Environmental Design",
    "Fine Arts",

    // Faculty of Engineering and Natural Sciences
    "Computer Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Industrial Engineering",
    "Chemistry",
    "Physics",
    "Mathematics",

    // Faculty of Health Sciences
    "Nursing",
    "Nutrition and Dietetics",
    "Physiotherapy and Rehabilitation",

    // Faculty of Political Sciences
    "International Relations",
    "Political Science and Public Administration",

    // Faculty of Sport Sciences
    "Physical Education and Sports Teaching",
    "Sports Management",

    // Faculty of Medicine
    "Medicine"
];


$(document).ready(function () {
    //widgets
    $("#birthdate").datepicker({
        maxDate: 0
    });

    $("#faculty").autocomplete({
        source: allFaculties
    });

    $("#department").autocomplete({
        source: allDepartments
    });



    //pasword error jquery plugin
    $("#password").on("input", function () {
        var enteredPassword = $(this).val();
        var passwordErrorMessage = $("#passwordError");

        var uppercasePattern = /^(?=.*[A-Z])/;
        var lowercasePattern = /^(?=.*[a-z])/;
        var lengthPattern = /^(?=.{7,})/;

        var isinvalidpassword = !uppercasePattern.test(enteredPassword) || !lowercasePattern.test(enteredPassword) || !lengthPattern.test(enteredPassword)

        if (isinvalidpassword) {
            passwordErrorMessage.text("Please enter a password that contains at least 1 uppercase letter, 1 lowercase letter, and is at least 7 characters long.");
        } else {
            passwordErrorMessage.text("");
        }
    });

    // see and hide function for pasword (jquery plugin)
    $("#togglePassword").on("click", function () {
        var passwordField = $("#password");
        var passwordFieldType = passwordField.attr("type");

        if (passwordFieldType === "password") {
            passwordField.attr("type", "text");
            $(this).text("Hide Password");
        } else {
            passwordField.attr("type", "password");
            $(this).text("See Password");
        }
    });

    $(document).ready(function () {
        $("#registrationForm").submit(function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the form field value
            const nameValue = $("#name").val();

            // Display the value in an alert
            alert("Hello " + nameValue + " thank you so much for joining us.");
        });
    });
});
