function showConfirmation() {
    var popup = document.getElementById("confirmationPopup"); popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("confirmationPopup"); popup.style.display = "none";
}

function confirmAction() {
    var popup = document.getElementById("confirmationPopup2"); popup.style.display = "block";
    closePopup();
}

function closePopup2() {
    var popup = document.getElementById("confirmationPopup3"); popup.style.display = "block";
    closePopup();
}

function ClosePopup() {
    document.getElementById("confirmationPopup2").style.display = "none";
}       
function ClosePopup() {
    document.getElementById("confirmationPopup3").style.display = "none";
}