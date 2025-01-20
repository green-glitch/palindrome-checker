const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
    let text = textInput.value.toLowerCase();
    text = text.split(/\s+/).join("");
    const reversedText = text.split("").reverse().join("");
    return text === reversedText;

}

checkBtn.addEventListener("click", () => {
    result.innerText = checkPalindrome() ? `${textInput.value} is palindrome`:`${textInput.value} is not palindrome`;
});