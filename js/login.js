$(document).ready(function() {
    const api_name = "http://ecommerce.reworkstaging.name.ng/v2"
    const user_ID = JSON.parse(localStorage.getItem("userLog_Data"))
    const USERID = user_ID.id

    var username = user_ID.first_name
    console.log(username)
    $("#user").text(`Welcome to The Shop, ${username}`)
    
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
                data: (user_loginData),
                success: function(res) {
                    console.log(res);
                    if (res.code === 404) {
                        alert("Error 404, Check your details again");
                    } else {
                        alert("Login successful");

                        var prodIDs;
                        try {
                            var user_IDs = JSON.parse(localStorage.getItem('user_IDs')) || [];
                        } catch (e) {
                            console.error("Failed to parse user_IDs:", e);
                            user_IDs = [];
                        }
                        user_IDs.push(res.id);
                        localStorage.setItem('user_IDs', JSON.stringify(user_IDs));
                        window.location.href = "index.html";
                        console.log("Howdy")
                        localStorage.setItem('userLog_Data', JSON.stringify(res))   
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

   $("#userDetailEdit").click(function(){
    $("#userEdit").toggleClass("none show")
   })

   $("#updateUserForm").on("submit", function(e){
        e.preventDefault()

        var updatefirstname = $("#updateUserFirstName").val()
        var updatesurname = $("#updateUserSurName").val()
        var updateemail = $("#updateUserEmail").val()
        var updatephone = $("#updateUserPhone").val()

        var oldpassword = $("#olduserpassword").val()
        var newpassword = $("#newuserpassword").val()

        let updatedUser_Info = {
            "first_name": updatefirstname,
            "last_name": updatesurname,
            "email": updateemail,
            "phone": updatephone
        }

        let userPasswords = {
            "old_password": oldpassword,
            "new_password": newpassword
        }
        $.ajax({
            url: `${api_name}/users/${USERID}`,
            method: "PUT",
            data: JSON.stringify(updatedUser_Info),
            contentType: "application/javascript",
            success: function(res){
                if (res.code === 404){
                    console.log("Error 404, Check Details")
                }
                else{
                    alert("Updated details successfully")
                    console.log('Success with editing user info', res);
                    localStorage.setItem('updatedUser_Info', JSON.stringify(updatedUser_Info));
                }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })

        $.ajax({
            url: `${api_name}/users/${USERID}/change-passwd`,
            method: "PUT",
            data: JSON.stringify(userPasswords),
            contentType: "application/javascript",
            success: function(res){
                if(res.code === 404){
                    alert("Error 404, Password Mismatch")
                }
                else{
                    alert("Password updated Successfully!")
                    localStorage.setItem('userPasswords', JSON.stringify(res)) || [];
                    window.location.href = "login.html";
                }
            },
            error: function(err) {
                console.log(err);
                alert("An error occurred. Please try again.");
            }
        })
   })

    //////////////////////////////////////////////////////////////////////////////////
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
    
    $("#merchantEdit").click(function(){
        $("#editPage").toggleClass("none show")
    })
    $("#merchantEditForm").on("submit", function(e){
        const merchantyyy = JSON.parse(localStorage.getItem("merchantLog_Data"))
        var merchant = merchantyyy.id
    
        let editFirstName = $("#editFirstName").val()
        let editLastName = $("#editLastName").val()
        let editEmail = $("#editEmail").val()
        let editPhoneNumber = $("#editPhoneNumber").val()
        let editStoreName = $("#editStoreName").val()
        let editDescription = $("#editDescription").val()
        let editPhoneNumbers = [$("#editPhoneNumbers1").val(), $("#editPhoneNumbers2").val()]
        
        let first_nameErr = $('#editFirstNameErr');
        let last_nameErr = $('#editLastNameErr');
        let emailErr = $('#editEmailErr');
        let phoneErr = $('#editPhoneNumberErr');
        let store_nameErr = $('#editStoreNameErr');
        let descpErr = $('#editDescriptionErr');
        let phonesErr = $('#editPhoneNumbersErr');

        e.preventDefault()
        let valid = true
        var updatedMerchant_Info = {
            "first_name":editFirstName,
            "last_name":editLastName,
            "email":editEmail,
            "phone":editPhoneNumber,
            "store_name":editStoreName,
            "descp":editDescription,
            "icon":"",
            "banner":"",
            "state": "",
            "district": "",
            "social_media": {
                "x": "",
                "face_book":"",
                "instagram": ""
            },
            "phones":editPhoneNumbers
        }

        first_nameErr.text('');
        last_nameErr.text('');
        emailErr.text('');
        phoneErr.text('');
        store_nameErr.text('');
        descpErr.text('');
        phonesErr.text('');

        if ( editFirstName === "") {
            first_nameErr.text('First name cannot be empty');
            valid = false;
        } if (editLastName === "") {
            last_nameErr.text('Last name cannot be empty');
            valid = false;
        } if (editEmail === "") {
            emailErr.text('Email cannot be empty');
            valid = false;
        } else if (!emailRegex.test(editEmail)) {
            emailErr.text('Enter a valid email');
            valid = false;
        }
        if (editPhoneNumber === "") {
            first_nameErr.text('Phone number cannot be empty');
            valid = false;
        } else if (editPhoneNumber.length < 11) {
            passwordErr.text('Phone number cannot be less than 11 characters');
            valid = false;
        } if (editStoreName === "") {
            store_nameErr.text('Store name cannot be empty');
            valid = false;
        } if (editDescription === "") {
            descpErr.text('description cannot be empty');
            valid = false;
        }if (editPhoneNumbers === "") {
            phoneErr.text('phones cannot be empty');
            valid = false;
        }
        else{
            valid = true
            $.ajax({
                url: `${api_name}/merchants/${merchant}`,
                method: "PUT",
                contentType: 'application/json',
                data: JSON.stringify(updatedMerchant_Info),
                success: function(res) {
                    console.log(res);
                    if (res.code === 404) {
                        valid = false
                        alert("Error 404, Check your details again");
                    } else {
                        valid = true
                        alert("Edited merchant information successfully");
                        console.log('Success with editing merchant info', res);
                        localStorage.setItem('updatedMerchant_Info', JSON.stringify(updatedMerchant_Info));
                        window.location.href = "merchantLog.html";
                    }
                },
                error: function(err) {
                    console.log(err);
                    alert("An error occurred. Please try again.");
                }
            })        

        }

        
    })

    localStorage.removeItem("updatedMerchant_Data")
});




