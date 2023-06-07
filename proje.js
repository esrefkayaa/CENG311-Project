$(document).ready(function () {
    var passwordCheck = false;
    var emailCheck = false;
    var studentNumberCheck = false;

    //using jquery.ui plugin effects (show)
    setTimeout(() => {
        $(".event-image img").show("drop", 1000);
        $("#aboutimg1").show("drop", 1000);
        $("#aboutimg2").show("drop", 1000);
        $("#contactimg img").show("bounce", 1000);

    }, 260)

    //using jquery.ui plugin (fadeout , fadein) When clicked contact button in contact webpages then open contact form within 500ms.
    $('#contactButton').click(function () {
        $('#contactButton').fadeOut(500, function () {
            $('#contactForm').fadeIn(500);
        });
    });

    $('#contactForm').submit(function (e) {
        e.preventDefault();
        $('#contactForm').fadeOut(500, function () {
            $('#contactButton').fadeIn(500);
        });
    });

    //When you click on the motto, the motto changes and grows and shifts to the right, pushing the texts below 10% down.
    $('.motto').click(function (e) {
        e.preventDefault();
        $('.motto')
            .html("Come on, come join us in our peaceful war!!")
            .css({
                'font-size': '2rem',
                'font-style': 'italic',
                'overflow': 'hidden',
                'white-space': 'nowrap'
            })
            .animate({
                'margin-bottom': '10%',
                'margin-left': '10%'
            }, 1000, function () {
                $(this)
                    .css('margin-left', '0')
                    .animate({ 'margin-bottom': '10%' }, 1000);
            });
    });

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

    // Widget datepicker
    $("#birthdate").datepicker({
        maxDate: 0
    });

    //Widget autocomplete
    $("#faculty").autocomplete({
        source: allFaculties
    });

    //Widget autocomplete
    $("#department").autocomplete({
        source: allDepartments
    });

    // Password error jQuery plugin
    $("#password").on("input", function () {
        var enteredPassword = $(this).val();
        var passwordErrorMessage = $("#passwordError");

        var uppercasePattern = /^(?=.*[A-Z])/;
        var lowercasePattern = /^(?=.*[a-z])/;
        var lengthPattern = /^(?=.{7,})/;

        var isInvalidPassword = !uppercasePattern.test(enteredPassword) || !lowercasePattern.test(enteredPassword) || !lengthPattern.test(enteredPassword);


        if (isInvalidPassword) {
            passwordErrorMessage.text("Please enter a password that contains at least 1 uppercase letter, 1 lowercase letter, and is at least 7 characters long.");
            passwordCheck = false;
        } else {
            passwordErrorMessage.text("");
            passwordCheck = true;
        }
    });

    // Email error used jQuery on plugin
    $("#email").on("input", function () {
        var enteredEmail = $(this).val();
        var emailErrorMessage = $("#emailError");

        var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        var isInvalidEmail = !emailPattern.test(enteredEmail);

        if (isInvalidEmail) {
            emailErrorMessage.text("Please enter a valid email address.");
            emailCheck = false;
        } else {
            emailErrorMessage.text("");
            emailCheck = true;
        }
    });

    //Student number error used jquery on plugin
    $("#studentNumber").on("input", function () {
        var enteredStudentNumber = $(this).val();
        var studentNumberErrorMessage = $("#studentNumberError");

        var isInvalidStudentNumber = !/^\d{11}$/.test(enteredStudentNumber);

        if (isInvalidStudentNumber) {
            studentNumberErrorMessage.text("Please enter a student number with exactly 11 numeric characters.");
            studentNumberCheck = false;
        } else {
            studentNumberErrorMessage.text("");
            studentNumberCheck = true;
        }
    });

    // See and hide function for password (jQuery plugin)
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

    // I used in my home page when clicked join us opened the registration form. I checked the accuracy of the data received when our registration form was submitted . I used jquery on plugin and widget cx dialog to be different from contact form
    $("#registrationForm").on('submit', function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const birthdate = $("#birthdate").val();
        const faculty = $("#faculty").val();
        const department = $("#department").val();
        const studentNumber = $("#studentNumber").val();
        const classNumber = $("#class option").filter(":selected").val();

        if (name == "" || email == "" || password == "" || birthdate == "" || faculty == "" || department == "" || studentNumber == "" || classNumber == "") {
            //using cx dialog widgets
            cxDialog({
                title: "ERROR",
                info: "Please don't leave any blank spaces. ",
                buttons: [
                    {
                        text: "OK",
                        callback: () => { }
                    }
                ]
            })
        }
        else if (emailCheck == false) {
            cxDialog({
                title: "ERROR",
                info: "Please check your email.",
                buttons: [
                    {
                        text: "OK",
                        callback: () => { }
                    }
                ]
            })
        }

        else if (passwordCheck == false) {
            cxDialog({
                title: "ERROR",
                info: "Please check your password.",
                buttons: [
                    {
                        text: "OK",
                        callback: () => { }
                    }
                ]
            })
        }

        else if (studentNumberCheck == false) {
            cxDialog({
                title: "ERROR",
                info: "Please check your Student Number.",
                buttons: [
                    {
                        text: "OK",
                        callback: () => { }
                    }
                ]
            })
        }
        //If the information is entered completely and correctly, it goes to the index.html page.
        else {
            cxDialog({
                title: "SUCCESSFUL",
                info: "Welcome, " + name + ". Thank you so much for join us.",
                buttons: [
                    {
                        text: "OK",
                        callback: () => {
                            window.location.href = "index.html";
                        }
                    }
                ]
            })
        }

    });

    //I checked the accuracy of the data received when our contact form was submitted . I used jquery on plugin and widget dialog in contact form.
    $("#contactForm").on('submit', function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const subject = $("#subject").val();
        const message = $("#message").val();

        if (name == "" || email == "" || subject == "" || message == "") {
            showDialog("ERROR", "Please don't leave any blank spaces.");
        }
        else if (emailCheck == false) {
            showDialog("ERROR", "Please check your email.");
        }
        else {
            showDialog("SUCCESSFUL", "Thank you for contacting us " + name + ", we will contact you at " + email);
        }
    });
    // I used dialog widget in contact form.
    function showDialog(title, message) {
        $("<div></div>").dialog({
            title: title,
            resizable: false,
            modal: true,
            open: function (event, ui) {
                $(this).text(message);
            }
        });
    }

    $.getJSON('events.json', function (events) {
        const eventsList = $('#events-list');
        const currentDate = new Date();

        // I just created a "futureEvents" array containing future events.
        const upcomingEvents = events.filter(function (event) {
            return new Date(event.date) >= currentDate;
        });

        // I sorted events by upcoming date.
        upcomingEvents.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });

        // Iterates over the upcomingEvents array containing upcoming events and selects the first 4 events.
        $.each(upcomingEvents.slice(0, 4), function (index, event) {

            // I create eventItem and added it to "event" class.
            const eventItem = $('<li>').addClass('event');

            // I create eventImage container and added it to "event-image" class. 
            const eventImage = $('<div>').addClass('event-image').append($('<img>').attr('src', event.image));

            // I Create event text container and added it to "event-text" class.
            const eventText = $('<div>').addClass('event-text').append(
                $('<a>').attr('href', event.link).append(
                    $('<h2>').text(`${index + 1}) ${event.title}`),
                    $('<p>').text(event.date),
                    $('<p>').text(event.description)
                )
            );

            // I append event image and event text to the event item
            eventItem.append(eventImage, eventText);

            // I append event item to the eventsList
            eventsList.append(eventItem);
        });
    });
});
