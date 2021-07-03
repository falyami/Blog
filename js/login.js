
$("#btnLogin").click(function (event) {
    // Reset Form Controls & Variables
    sessionStorage.clear();
    document.getElementById('divErrorMessage').style.display = "none";

    // Get Form Entries
    var form = document.getElementById('loginForm'); 
    const username = form.username.value;
    const password = Number(form.password.value);

    // Validate User Information
    const validUser = (username === "admin" && password === 12345) ? true : false;
    if (form.checkValidity() === false) {
        event.preventDefault();  
        event.stopPropagation();
    } else {
        if (validUser) {
            // Raise Flag to Authenticate User By Session Variable
            sessionStorage.setItem("AUTHENTICATED", 1);
            // Navigate to Next Page to Add New Content
            window.location.href = "/views/addcontent.html";
        } else {
            // Set Session Variable Value to false
            sessionStorage.setItem("AUTHENTICATED", 0);
            // Show Error Message
            document.getElementById('divErrorMessage').style.display = "block";
        }
    }
    form.classList.add('was-validated');
    return false;
});
