//
function showConfirmation() {
    var popup = document.getElementById("confirmationPopup"); popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("confirmationPopup"); popup.style.display = "none";
}

function CONFIRM() {
    var popup = document.getElementById("confirmationPopup2"); popup.style.display = "block";
    closePopup();
}

function NONCONFIRM() {
    var popup = document.getElementById("confirmationPopup3"); popup.style.display = "block";
    closePopup();
}

// Exist Confirmation Popups Froms - START
function ClosePopup3() {
    document.getElementById("confirmationPopup2").style.display = "none";
    window.location.href = "confirmation_page2.html";
}
function ClosePopup4() {
    document.getElementById("confirmationPopup3").style.display = "none";
    window.location.href = "payment.html";
}
// Exist Confirmation Popups Froms - END

// Close the Confirmation Pop Form - START
function closePopup() {
    var popup = document.getElementById("confirm"); popup.style.display = "none";
    closePopup();
}
//Close the Confirmation Pop Form - END