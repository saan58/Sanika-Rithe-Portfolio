//code for contact page -validation of email,name and message
function validateForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        showError("emailError", "Please enter your email address.");
        return false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        return false;
    }

    hideError("emailError");

    if (name.trim() === "") {
        showError("nameError", "Please enter your full name.");
        return false;
    }

    hideError("nameError");

    if (message.trim() === "") {
        showError("messageError", "Please type a message.");
        return false;
    }

    hideError("messageError");

    alert("Form submitted successfully!");
    return true;
}

function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.display = "block";
}

function hideError(id) {
    document.getElementById(id).style.display = "none";
}

// code for Skills page - additional skills button
function toggleSkills() {
    var additionalSkills = document.getElementById('additionalSkills');
    var skillsText = document.getElementById('skillsText');

    if (getComputedStyle(additionalSkills).display === 'none') {
        additionalSkills.style.display = 'block';
        skillsText.innerHTML = 'Hide Skills';
    } else {
        additionalSkills.style.display = 'none';
        skillsText.innerHTML = 'Tap to see additional Skills';
    }
}