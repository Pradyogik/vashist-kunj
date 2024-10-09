/*
    Only Allow A
*/
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}


function validateUserLogin() {
    var username = $('#username').val();
    var password = $('#password').val();
    error = 0;
    if(username =='') {
        error++;
    }

    if(password =='') {
        error++;
    }

    if(error) {
        swal("error!", "Please enter valid username and password.", "error");
        return false;
    }
}

