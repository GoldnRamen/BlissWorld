$(document).ready(function (){
    const api_name = "http://ecommerce.reworkstaging.name.ng/v2"
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
                let user_loginData = {
                    "email": email,
                    "password": password
                }
                $.ajax({
                    url: `${api_name}/users/login`,
                    method: 'POST',
                    data: user_loginData,
                    success: function(res) {
                        console.log(res);
                        if (res.code === 404) {
                            alert("Error 404, Check your details again");
                        } else {
                            alert("Login successful");
                            window.location.href = "index.html";
                            $("#user-welcome").append(
                                `<p>Welcome ${user_loginData.email}</p>`
                            )
                            console.log("Howdy")
                        }
                    },
                    error: function(err) {
                        console.log(err);
                        alert("An error occurred. Please try again.");
                    }
                })
                // Redirect to the index page if validation passes
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
            let merchantLog_Data = {
                "email": email,
                "password": password
            }
            $.ajax({
                url: `${api_name}/merchants/login`,
                method: "POST",
                data: merchantLog_Data,
                success: function(res){  
                    console.log(res) 
                    if(res.code === 404){
                        alert("Error 404, Check your details again");
                    }
                    else{
                        alert("Merchant Logged in Successfully");
                        window.location.href = "dashboard.html"
                        console.log('Success',res)
                        localStorage.setItem('merchantLog_Data', JSON.stringify(res))   
                    }
                },    
                error: function(err) {
                    console.log(err);
                    alert("An error occurred. Please try again.");
                }
            })
        }
    });
})