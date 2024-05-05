function showConfirmation() {
    var popup = document.getElementById("confirmationPopup");
    popup.style.display = "block";
 }
function showPopup() 
{
const selectedService = $("#service").val();
if (selectedService === "flight") {
$("#servicePopup").show();
$("#flightOptions").show();
$("#cruiseOptions").hide();
$("#hotelOptions").hide();
$("#carOptions").hide();
$("#viasOptions").hide();
$("#passportOptions").hide();
} 
else if (selectedService === "cruise") 
{
$("#servicePopup").show();
$("#cruiseOptions").show();
$("#flightOptions").hide();
$("#hotelOptions").hide();
$("#carOptions").hide();
$("#viasOptions").hide();
$("#passportOptions").hide();
} 
else if (selectedService === "hotel") 
{
$("#servicePopup").show();
$("#hotelOptions").show();
$("#cruiseOptions").hide();
$("#flightOptions").hide();
$("#carOptions").hide();
$("#viasOptions").hide();
$("#passportOptions").hide();
}
else if (selectedService === "car") 
{
$("#servicePopup").show();
$("#carOptions").show();
$("#hotelOptions").hide();
$("#cruiseOptions").hide();
$("#flightOptions").hide();
$("#viasOptions").hide();
$("#passportOptions").hide();
}
else if (selectedService === "visa") 
{
$("#servicePopup").show();
$("#visaOptions").show();
$("#hotelOptions").hide();
$("#cruiseOptions").hide();
$("#flightOptions").hide();
$("#carOptions").hide();
$("#passportOptions").hide();
}
else if (selectedService === "passport") {
$("#servicePopup").show();
$("#passportOptions").show();
$("#hotelOptions").hide();
$("#cruiseOptions").hide();
$("#flightOptions").hide();
$("#carOptions").hide();
$("#visaOptions").hide();
}   
else 
{
$("#servicePopup").show();
$("#hotelOptions").hide();
$("#cruiseOptions").hide();
$("#flightOptions").hide();
$("#carOptions").hide();
$("#visaOptions").hide();
$("#passportOptions").hide();
}
}

$("input[name='flightOption']").change(function() {
const selectedPrice = $(this).data("price");
$("#totalPrice").val(selectedPrice);
});