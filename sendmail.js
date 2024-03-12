function SendMail(){
    var params = {
        from_name: "Priyank Sharma",
        to_name : document.getElementById("fullName").value,
        phone_number : document.getElementById("number").value,
        email_id : document.getElementById("email_id").value,
        date_appointment : document.getElementById("date").value,
        message : document.getElementById("message").value 
    }
    try{
        emailjs.send("service_fbugajd", "template_ckvu8j2", params).then(function(res){
            alert("You're appointment has been scheduled!");
            console.log("sent");
        })
    }

    catch{
        console.log(error());
    }
        
    
    
        
}