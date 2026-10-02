// ========================================
// GAME VARIABLES
// ========================================

// Does the player have the key?

let hasKey = false;


// ========================================
// GET HTML ELEMENTS
// ========================================

let bedroom = document.getElementById("bedroom");

let catZoom = document.getElementById("catZoom");

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

function showbedroom() {

    bedroom.classList.remove("hidden");

    catZoom.classList.add("hidden");

    room2.classList.add("hidden");

}


// ========================================
// FUNCTION: SHOW cat ZOOM
// ========================================

function showcatZoom() {

    bedroom.classList.add("hidden");

    catZoom.classList.remove("hidden");

    room2.classList.add("hidden");

}


// ========================================
// FUNCTION: SHOW ROOM 2
// ========================================

function showRoom2() {

    bedroom.classList.add("hidden");

    catZoom.classList.add("hidden");

    room2.classList.remove("hidden");

}


// ========================================
// CLICKING THE cat
// ========================================

document.getElementById("cat").addEventListener("click", function() {

    showcatZoom();

    showMessage(
        "You look closely at the cat."
    );

});

/*
// ========================================
// CLICKING THE bookcase
// ========================================

document.getElementById("bookcase").addEventListener("click", function() {

    if (hasKey == true) {

        showRoom2();

        showMessage(
            "You unlock the bookcase and enter the next room."
        );

    }

    else {

        showMessage(
            "The bookcase is locked."
        );

    }

});
*/

// ========================================
// CLICKING THE KEY
// ========================================

/*        document.getElementById("key").addEventListener("click", function() {

            if (hasKey == false) {

                hasKey = true;

                showMessage(
                    "You picked up the key."
                );

                // Remove the key from the cat

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

*/
// ========================================
// BACK FROM cat
// ========================================

document.getElementById("backFromcat").addEventListener("click", function() {

    showbedroom();

    showMessage(
        "You return to the room."
    );

});


// ========================================
// BACK FROM ROOM 2
// ========================================

document.getElementById("backFromRoom2").addEventListener("click", function() {

    showbedroom();

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