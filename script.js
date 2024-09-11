
// Placeholder for future interactivity (e.g., form submission handling)
window.onload = function(){
  console.log("JavaScript loaded");

  document.getElementById('submitButton').addEventListener("click",Send_Email);
  
}

function Prevent_Form_Default(e){
  e.preventDefault(); 
}

function Send_Email(){
  console.log("Send");
  let Name = String(document.getElementById('nameLabel').value);
  console.log(Name);
  if(Name == ""){
    Name = "Anonymous";
  }
  var subject = 'Contacting North York Physiotherapy & Sports Injury Clinic';
  let Email_Body = document.getElementById('message').value;
  let email = "";
  var emailBody = Email_Body.replace(/(\r\n|\n)/g, "%0D%0A");  
  document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}



