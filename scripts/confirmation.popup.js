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

// Exist Confirmation Popups Froms - START
function ClosePopup3() {
    document.getElementById("confirmationPopup2").style.display = "none";
}
function ClosePopup4() {
    document.getElementById("confirmationPopup3").style.display = "none";
}
// Exist Confirmation Popups Froms - END
