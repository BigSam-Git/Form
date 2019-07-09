function validateForm() {
    var send = false;
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var telno = document.getElementById("telno");
    // var image = document.getElementById("img");
    // var country = document.getElementById("country");
    var address = document.getElementById("add");


    send = user_match(username);
    send = pass_match(password);
    send = email_match(email);
    send = user_address(address);

    if (send) {
        sendData();
    }


    // if (username.match(/^[A-Za-z]+$/)) {
    //     if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    //         if (password.length == 0 || password.length >= 25 || password.length < 8) {
    //             if (!image) {
    //                 if (country == "Default") {
    //                     if (address.match(letters)) {

    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    return false;
}

// var dataString = 'username=' + username + '&email' + email + '&password' + password;
function sendTest() {
    alert('Sent');
}

function user_match(username) {
    if (username === "") {
        alert('Please add a username');
        return false;
    } else if (username.value.match(/^[A-Za-z]+$/)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        username.focus();
        return false;
    }
}

function pass_match(password) {
    if (password.length == 0 || password.length >= 25 || password.length < 8) {
        alert("Password should not be empty / length be between " + 8 + " to " + 25);
        password.focus();
        return false;
    }
}

function email_match(email) {
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

// function img(image) {
//     if (!image) {
//         alert("Please add your picture");
//         image.focus();
//     }
// }

// function countryselect(country) {
//     if (country == "Default") {
//         alert('Select your country from the list');
//         country.focus();
//         return false;
//     } else {
//         return true;

//     }

// }

function user_address(address) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (address.value.match(letters)) {
        return true;
    } else {
        alert('User address must have alphanumeric characters only');
        address.focus();
        return false;
    }
}






function sendData() {
    var XHR = new XMLHttpRequest();
    form = document.getElementById("form");
    // Bind the FormData object and the form element
    action = document.getElementById("form").action;
    var FD = new FormData(form);
    console.log(FD);
    console.log(form);
    console.log(action);
    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
        alert(event.target.responseText);
    });
    // console.log(FD.getAll())
    for (let username of Object.entries(form)) {
        console.log(username);
    }

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", action);

    // The data sent is what the user provided in the form
    XHR.send(FD);

    document.getElementById("form").reset();
}