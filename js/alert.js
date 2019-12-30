function lelareValidate() {
    var name = document.lelareForm.name.value;
    var password = document.lelareForm.password.value;
    var confirmPassword = document.lelareForm.confirmPassword.value;
    if (name == null) {
        alert("Please fill in your Full name");
        return false;
    } else if (password.length < 6) {
        alert("Password must be atleast 6 characters long");
        return false;
    }
    else if (password != confirmPassword) {
        alert("Password doesn't match. Try again");
        return false;
    }

}
let person 
{
    name:getELementId("Fullname");
email: getELementId("Email");
password: getELementId("Password");
newpassword: getELementId("newpassword");
}
alert('hello' + person.name);