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
        

            // console.log(email, password)


        // if(emailErr.text() == "" && passwordErr.text() == "" ){
        //     location.href = 'login.html'

        
    });

    // $('#hideDiv').click(function (){
    //     $('#search').hide()
    // })
    // $('#showDiv').click(function (){
    //     $('#search').show()
    // })

    $('#showDiv').click(function (){
        $('#search').toggleClass('visible')
     })
 
        $('#hideDiv').click(function (){
         $('#search').toggleClass('visible')
     })
    


})