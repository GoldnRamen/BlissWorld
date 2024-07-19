$(document).ready(function (){

    $('#btn').on('click', function () {
        let email = $('#email').val();
        let password = $('#password').val();
        let emailErr = $('#emailErr');
        let passwordErr = $('#passwordErr');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // console.log(email, password)

        if(email == ""){
            emailErr.text('Email can not be empty')
        } else if (!emailRegex.test(email)) {
            emailErr.text('Enter a valid email')
            
        }else if(email){
            emailErr.text('')
        }
       if(password == ""){
        passwordErr.text('Password can not be empty')
                
        }else if (password.length < 8){
            passwordErr.text('Password can not be less than 8')
        }else
            passwordErr.text('')

            if(emailErr.text() =="" && passwordErr.text() == ""){
            
            location.href = 'index.html'
            
            }
        

            // console.log(email, password)


        // if(emailErr.text() == "" && passwordErr.text() == "" ){
        //     location.href = 'login.html'

        
    });


    $('#merchBtn').on('click', function () {
        let email2 = $('#merchEmail').val();
        let password2 = $('#merchPassword').val();
        let emailErr2 = $('#merchEmailErr');
        let passwordErr2 = $('merchPasswordErr');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // console.log(email, password)

        if(email2 == ""){
            emailErr2.text('Email can not be empty')
        } else if (!emailRegex.test(email2)) {
            emailErr2.text('Enter a valid email')
            
        }else if(email2){
            emailErr2.text('')
        }
       if(password2 == ""){
        passwordErr2.text('Password can not be empty')
                
        }else if (password2.length < 8){
            passwordErr2.text('Password can not be less than 8')
        }else
            passwordErr2.text('')

            if(emailErr2.text() =="" && passwordErr2.text() == ""){
            
            location.href = 'dashboard.html'
            
            }
        

            // console.log(email, password)


        // if(emailErr.text() == "" && passwordErr.text() == "" ){
        //     location.href = 'login.html'

        
    });
})