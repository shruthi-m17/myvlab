function sendEmail()
{
    Email.send({
    Host : "smtp.yourisp.com",
    Username : "indianshruthi@gmail.com",
    Password : "4965D9F54B8A78F7FE31926A4D63CD21E396",
    To : "jothiswari34805@gmail.com",
    From : document.getElementById("email").value,
    Subject : "Feedback Received",
    Body : "Name: "+ document.getElementById("name").value
     + "<br> Email: " + document.getElementById("email").value
     + "<br> Phone Number : " + document.getElementById("phone").value
     + "<br> Message: " + document.getElementById("message").value
     }).then(message => alert("Message Sent Successfully !!!"));
}