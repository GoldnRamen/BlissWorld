$(document).ready(function (){
    $(document).ready(function() {
        $("#loginForm").on("submit", function(e) {
            e.preventDefault();
    
            let email = $('#email').val();
            let password = $('#password').val();
            let emailErr = $('#emailErr');
            let passwordErr = $('#passwordErr');
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;
            let valid = true;
    
            // Clear previous error messages
            emailErr.text('');
            passwordErr.text('');
    
            if (email === "") {
                emailErr.text('Email cannot be empty');
                valid = false;
            } else if (!emailRegex.test(email)) {
                emailErr.text('Enter a valid email');
                valid = false;
            }
    
            if (password === "") {
                passwordErr.text('Password cannot be empty');
                valid = false;
            } else if (password.length < 8) {
                passwordErr.text('Password cannot be less than 8 characters');
                valid = false;
            }
    
            if (valid) {
                // Redirect to the index page if validation passes
                location.href = 'index.html';
            }
        });
    });
    
    


    $("#merchLogin").on("submit", function(e) {
        e.preventDefault();

        let valid = true;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        // Clear previous error messages
        $('.error').text('');

        // Validate Email
        let email = $('#merchEmail').val();
        if (email === "") {
            $('#merchEmailErr').text('Email cannot be empty');
            valid = false;
        } else if (!emailRegex.test(email)) {
            $('#merchEmailErr').text('Enter a valid email');
            valid = false;
        }

        // Validate Password
        let password = $('#merchPassword').val();
        if (password === "") {
            $('#merchPasswordErr').text('Password cannot be empty');
            valid = false;
        } else if (password.length < 6) {
            $('#merchPasswordErr').text('Password must be at least 6 characters long');
            valid = false;
        }

        // If form is valid, submit the form
        if (valid) {
            alert("Form submitted successfully!");
            this.submit();
            window.location.href = "dashboard.html"
        }
    });
})