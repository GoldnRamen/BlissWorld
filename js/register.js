$(document).ready(function(){
    const api_name =  "http://ecommerce.reworkstaging.name.ng/v2"

    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        let valid = true;

        const regFirstname = $('#regFirstname').val();
        const regFirstnameErr = $("#regFirstnameErr");
        const regSurname = $('#regSurname').val();
        const regSurnameErr = $('#regSurnameErr');
        const regEmail = $('#regEmail').val();
        const regEmailErr = $('#regEmailErr');
        const regPhone = $('#regPhone').val();
        const regPassword = $('#regPassword').val();
        const regPasswordErr = $('#regPasswordErr');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Clear previous error messages
        $(".error").text('');

        if(regFirstname === ""){
            valid = false;
            regFirstnameErr.text('First Name cannot be empty');
        }
        if(regSurname === ""){
            valid = false;
            regSurnameErr.text('Last Name cannot be empty');
        }
        if(regEmail === ""){
            valid = false;
            regEmailErr.text('Email cannot be empty');
        } else if (!emailRegex.test(regEmail)) {
            valid = false;
            regEmailErr.text('Enter a valid email');
        }
        
        if (regPhone === "") {
            $('#regPhoneErr').text('Phone Number cannot be empty');
            valid = false;
        } else if (!/^\d{11}$/.test(regPhone)) {
            $('#regPhoneErr').text('Phone number must be 11 numbers');
            valid = false;
        }
        if(regPassword === ""){
            valid = false;
            regPasswordErr.text('Password cannot be empty');
        } else if (regPassword.length < 8){
            valid = false;
            regPasswordErr.text('Password cannot be less than 8 characters');
        }

        if(valid) {
            // Store the data in local storage
            let user_regData = {
                "first_name": regFirstname,
                "last_name": regSurname,
                "email": regEmail,
                "phone": regPhone,
                "password": regPassword
            }
            $.ajax({
                method:"POST",
                url: `${api_name}/users`,
                data: user_regData,
                success: function(res){  
                    console.log(res) 
                    if(res.code === 404){
                        alert("Error 404, Check your details again");
                    }
                    else{
                        alert("Registered User Successfully");
                        window.location.href = "login.html"
                        console.log('Success',res)
                        localStorage.setItem('user_regData', JSON.stringify(res))
                        
                    }
                },
                error: function(err) {
                    console.log(err);
                    alert("An error occurred. Please try again.");
                }
            })
           
        }
    });

    $("#merchRegForm").on("submit", function(e) {
        e.preventDefault();

        let valid = true;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        // Clear previous error messages
        $('.error').text('');

        // Validate First Name
        let firstName = $('#firstName').val();
        if (firstName === "") {
            $('#firstNameError').text('First Name cannot be empty');
            valid = false;
        }

        // Validate Last Name
        let lastName = $('#lastName').val();
        if (lastName === "") {
            $('#lastNameError').text('Last Name cannot be empty');
            valid = false;
        }

        // Validate Email
        let email = $('#email').val();
        if (email === "") {
            $('#emailError').text('Email cannot be empty');
            valid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Enter a valid email');
            valid = false;
        }

        // Validate Phone Number
        let phone = $('#phone').val();
        if (phone === "") {
            $('#phoneError').text('Phone Number cannot be empty');
            valid = false;
        } else if (!/^\d{11}$/.test(phone)) {
            $('#phoneError').text('Phone number must be 11 numbers');
            valid = false;
        }

        // Validate Store Name
        let storeName = $('#storeName').val();
        if (storeName === "") {
            $('#storeNameError').text('Store Name cannot be empty');
            valid = false;
        }

        // Validate Description
        let description = $('#description').val();
        // if (description === "") {
            
        //     valid = false;
        // }

        // Validate Password
        let icon = $("#icon").val()
        let banner = $("#banner").val()
        let other_phones = $("#otherPhones").val()

        let password = $('#password').val();
        let secPassword = $('#secPassword').val();
        if (password === "") {
            $('#passwordError').text('Password cannot be empty');
            valid = false;
        } else if (password.length < 8) {
            $('#passwordError').text('Password must be at least 8 characters long');
            valid = false;
        }
        // Validate Retype Password
        if (secPassword === "") {
            $('#secPasswordError').text('Retype Password cannot be empty');
            valid = false;
        } else if (password !== secPassword) {
            $('#secPasswordError').text('Passwords do not match');
            valid = false;
        }

        // If form is valid, submit the form
        if (valid) {
            let merchant_regData = {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "phone": phone,
                "store_name": storeName,
                "descp": description,
                "icon": icon,
                "banner": banner,
                "phones": other_phones,
                "password": password
            };
            $.ajax({
                url: `${api_name}/merchants`,
                method: "POST",
                data: merchant_regData,
                success: function(res){  
                    console.log(res) 
                    if(res.code === 404){
                        alert("Error 404, Check your details again");
                    }
                    else{
                        alert("Registered Merchant Successfully");
                        window.location.href = "merchantLog.html"
                        console.log('Success',res)
                        localStorage.setItem('merchant_regData', JSON.stringify(res))
                        
                    }
                },
                error: function(err) {
                    console.log(err);
                    alert("An error occurred. Please try again.");
                }

            })
        }
    });
});   