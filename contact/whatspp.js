
<script>
function whatsapp(){
var phone_number = document.getElementById("phone_number).value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var date = document.getElementById("date").value;
var message = document.getElementById("message").value;

var url = "https://wa.me/254113312549?text="
+"*Name :* "+name+"%0a"
+"*Email :* "+email+"%0a"
+"*Phone :* "+phone+"%0a"
+"*Date :* "+date+"%0a"
+"*Message :* "+message;

window.open(url,'_blank').focus();
}
</script>
