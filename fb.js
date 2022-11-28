$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        firstname:{
            required:true
        },
        secondname:{
            required:true
        },
        email:{
            required:true,
            email:true,
            
        },
       
        
        password:{
            required:true,
            minlength:8
        },
        day:{
            required:true
        },
        month:{
            required:true
        },
        year:{
            required:true  
        },
        gender:{
            required:true    
        }
    },
    message:{
        firstname: {
            required:"enter first name",
            minlength:"enter atleat 4 charactor"
        }
    }





    })
})