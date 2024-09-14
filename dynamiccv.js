var form = document.getElementById('resumeform');
var resumedisplayElement = document.getElementById('resume-display');
//hundle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //
    var resumeHTML = "\n        <h2>Dynamic Resume</h2>\n        <h3>Personal information</h3>\n        <p><b>First Name:</b>".concat(firstname, "</P>\n        <p><b>Last Name:</b>").concat(lastname, "</p>\n        <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Address:</b>").concat(address, "</p>\n        <p><b>Number:</b>").concat(number, "</p>\n        <h3>Education</h3>\n        <p><b>Education:</b>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p><b>Skills:</b>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p><b>Experience:</b>").concat(experience, "</p>\n        ");
    //
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element are missing');
    }
});
