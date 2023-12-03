function submitForm() {
    // Display confirmation popup
    var popupOverlay = document.createElement('div');
    popupOverlay.classList.add('overlay');

    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<p>Are you sure with your order?</p><button onclick="confirmOrder()">Yes</button><button class="no" onclick="closePopup()">No</button>`;

    popupOverlay.appendChild(popup);
    document.body.appendChild(popupOverlay);

    // Show the popup
    popupOverlay.style.display = 'flex';
}

function confirmOrder() {
    // Display success message
    var popupOverlay = document.querySelector('.overlay');
    var successPopup = document.createElement('div');
    successPopup.classList.add('popup');
    successPopup.innerHTML = `<p>Order successful and sent!</p><button onclick="redirectToIndex()">OK</button>`;
    
    // Replace the current popup with the success message
    popupOverlay.innerHTML = '';
    popupOverlay.appendChild(successPopup);

    // Adjust styles if needed
    successPopup.style.display = 'flex';
}

function redirectToIndex() {
    // Redirect to ../index.html
    window.location.href = "../index.html";
}

function closePopup() {
    // Close the popup and remove it from the DOM
    var popupOverlay = document.querySelector('.overlay');
    document.body.removeChild(popupOverlay);
}
