function mytxt() {
    const username = document.getElementById('uname').value;
    const pass = document.getElementById('pass').value;
    const conpass = document.getElementById('conpass').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    if (username == "" || username == null) {
        document.getElementById('unspan').innerHTML = "please enter username";
        return false;
    }
    else if (username.length <= 3 || username.length > 15) {
        document.getElementById('unspan').innerHTML = "valid username length between 3 to 15";
        return false;
    }
    else if (!isNaN(username)) {
        document.getElementById('unspan').innerHTML = "only characters allowed";
        return false;
    }

    if (pass == "" || pass == null) {
        document.getElementById('passspan').innerHTML = "please enter password";
        return false;
    }
    else if (pass.length <= 5 || pass.length > 15) {
        document.getElementById('passspan').innerHTML = "valid password length 6 to 15";
        return false;
    }
    if (conpass == "" || conpass == null) {
        document.getElementById('conpassspan').innerHTML = "please enter confirm password";
        return false;
    }
    else if (conpass != pass) {
        document.getElementById('conpasspan').innerHTML = "confirm password not match";
        return false;
    }
    if (phone == "" || phone == null) {
        document.getElementById('phonespan').innerHTML = "please enter phone number";
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('emailspan').innerHTML = "please enter email address";
        return false;
    }
    alert("submit data");
}
