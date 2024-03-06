

var form = document.getElementById('send_data');


form.onsubmit = (e) => {
    var enteredName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNo = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    const data = {
        name: enteredName,
        email: email,
        phoneNo: phoneNo,
        subject: subject,
        message: message
    }

    e.preventDefault()
    console.log(data);
}