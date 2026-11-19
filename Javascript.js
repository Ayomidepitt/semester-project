
const occasion = document.querySelector("#occasion");
const button = document.querySelector("#outfitButton");
const result = document.querySelector("#result");

button.addEventListener("click", function() {

    let choice = occasion.value;

    if (choice === "casual") {
        result.textContent =
            "Try jeans, a graphic T-shirt, and sneakers!";
    }
    else if (choice === "party") {
        result.textContent =
            "Try a stylish jacket, fitted pants, and boots!";
    }
    else if (choice === "formal") {
        result.textContent =
            "Try a suit, dress shirt, and dress shoes!";
    }
    else {
        result.textContent =
            "Please select an occasion first!";
    }

});
