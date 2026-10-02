// ========================================
// GAME VARIABLES
// ========================================

// Does the player have the key?

let hasKey = false;


// ========================================
// GET HTML ELEMENTS
// ========================================

let room1 = document.getElementById("room1");

let deskZoom = document.getElementById("deskZoom");

let room2 = document.getElementById("room2");

let message = document.getElementById("message");

let inventoryItems = document.getElementById("inventoryItems");


// ========================================
// FUNCTION: SHOW MESSAGE
// ========================================

function showMessage(text) {

    message.textContent = text;

}


// ========================================
// FUNCTION: SHOW ROOM 1
// ========================================

function showRoom1() {

    room1.classList.remove("hidden");

    deskZoom.classList.add("hidden");

    room2.classList.add("hidden");

}


// ========================================
// FUNCTION: SHOW DESK ZOOM
// ========================================

function showDeskZoom() {

    room1.classList.add("hidden");

    deskZoom.classList.remove("hidden");

    room2.classList.add("hidden");

}


// ========================================
// FUNCTION: SHOW ROOM 2
// ========================================

function showRoom2() {

    room1.classList.add("hidden");

    deskZoom.classList.add("hidden");

    room2.classList.remove("hidden");

}


// ========================================
// CLICKING THE DESK
// ========================================

document.getElementById("desk").addEventListener("click", function() {

    showDeskZoom();

    showMessage(
        "You look closely at the desk."
    );

});


// ========================================
// CLICKING THE DOOR
// ========================================

document.getElementById("door").addEventListener("click", function() {

    if (hasKey == true) {

        showRoom2();

        showMessage(
            "You unlock the door and enter the next room."
        );

    }

    else {

        showMessage(
            "The door is locked."
        );

    }

});


// ========================================
// CLICKING THE PAINTING
// ========================================

document.getElementById("painting").addEventListener("click", function() {

    showMessage(
        "It is an old painting. Something feels strange about it."
    );

});


// ========================================
// CLICKING THE KEY
// ========================================

document.getElementById("key").addEventListener("click", function() {

    if (hasKey == false) {

        hasKey = true;

        showMessage(
            "You picked up the key."
        );

        // Remove the key from the desk

        document.getElementById("key").style.display = "none";


        // Add key to inventory

        inventoryItems.textContent = "🔑 Key";

    }

});


// ========================================
// CLICKING THE DRAWER
// ========================================

document.getElementById("drawer").addEventListener("click", function() {

    if (hasKey == true) {

        showMessage(
            "The drawer is empty."
        );

    }

    else {

        showMessage(
            "The drawer is locked."
        );

    }

});


// ========================================
// BACK FROM DESK
// ========================================

document.getElementById("backFromDesk").addEventListener("click", function() {

    showRoom1();

    showMessage(
        "You return to the room."
    );

});


// ========================================
// BACK FROM ROOM 2
// ========================================

document.getElementById("backFromRoom2").addEventListener("click", function() {

    showRoom1();

    showMessage(
        "You return to the first room."
    );

});


// ========================================
// CLICKING THE PAPER
// ========================================

document.getElementById("paper").addEventListener("click", function() {

    showMessage(
        "The paper says: There is more to this room than meets the eye."
    );

});