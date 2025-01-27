const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (text) => {
    text = text.toLowerCase();
    text = text.split(/\s+/).join("");
    text = text.split(/[^a-zA-Z0-9 ]/).join("");
    let reversedText = text.split("").reverse().join("");
    return text === reversedText;

}

checkBtn.addEventListener("click", () => {
    let textToCheck = textInput.value;

    if (textToCheck !== ""){
        result.innerText = checkPalindrome(textToCheck) ? `${textToCheck} is a palindrome`:`${textToCheck} is not a palindrome`;
    }
    else {
        alert("Please input a value");
        result.innerText = ``;
    }
});