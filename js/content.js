window.addEventListener('load', () => {
    // Declare Variables
    const authenticated = Number(sessionStorage.getItem("AUTHENTICATED"));
    // Manage navbar Buttons
    if (authenticated === 1) {
        document.getElementById('lnkLogout').style.display = "block";
    } else {
        window.location.href = "/views/index.html";
    }
});

// Add Actions to onclick to Logout
$("#lnkLogout").on('click', function() {
    // Set AUTHENTICATED Session Variable to false
    sessionStorage.setItem("AUTHENTICATED", 0);
    window.location.href = "/views/index.html";
    return false;
});

// Add Actions to onclick to Add Content
$("#btnAdd").click(function (event) {
    // Reset Form Controls & Variables
    document.getElementById('divMessage').style.display = "none";

    // Get Form Entries
    var form = document.getElementById('addContentForm'); 
    const title = form.title.value;
    const content = form.content.value;

    // Validate User Entries
    if (form.checkValidity() === false) {
        event.preventDefault();  
        event.stopPropagation();
    } else {
        // Save Entries into Local Storage Variables
        localStorage.setItem("TITLE", title);
        localStorage.setItem("CONTENT", content);
        document.getElementById('divMessage').style.display = "block";
    }
    form.classList.add('was-validated');
    return false;
});
