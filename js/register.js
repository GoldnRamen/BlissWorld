$(document).ready(function(){
    $('#regBtn').on('click', function () {
        preventDefault()
        valid = true

        let regFirstname = $('#regFirstname').val();
        let regFirstnameErr = $("#regFirstnameErr").val();
        let regSurnameErr = $('#regSurnameErr').val();
        let regSurname = $('#regSurname').val();
        let reg_email = $('#regEmail').val();
        let reg_password = $('#regPassword').val();
        let reg_emailErr = $('#regEmailErr');
        let reg_passwordErr = $('#regPasswordErr');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;


        // console.log(email, password)
        if(regFirstname == ""){
            valid = false
            regFirstnameErr.text('Email can not be empty')
        }
        if(regSurname == ""){
            valid = false
            regSurnameErr.text('Email can not be empty')
        }
        if(reg_email == ""){
            valid = false
            reg_emailErr.text('Email can not be empty')
        } else if (!emailRegex.test(reg_email)) {
            valid = false
            reg_emailErr.text('Enter a valid email')
        }
       if(reg_password == ""){
        valid = false
        reg_passwordErr.text('Password can not be empty')
                
        }else if (reg_password.length < 8){
            valid  = false
            reg_passwordErr.text('Password can not be less than 8')
        }
        else {
            $("#registerForm .error").text('')
            valid = true
            alert("Registeration is successful. Login now")
            location.href = 'login.html'
            }
        

            // console.log(email, password)


        // if(emailErr.text() == "" && passwordErr.text() == "" ){
        //     location.href = 'login.html'

        
    });

})