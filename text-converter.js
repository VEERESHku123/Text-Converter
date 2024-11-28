
// Convert to Uppercase
function convertToUpper() {
    const str = document.getElementById("input").value; 
    const upperCaseText = str.toUpperCase(); 
    document.getElementById("result").textContent = `${upperCaseText}`; 
    //change the result heading
    document.getElementById("text3").innerHTML="Text Converted to UpperCase:";
}
            
// Convert to Lowercase
function convertToLower() {
    const str = document.getElementById("input").value; 
    const lowerCaseText = str.toLowerCase();
    document.getElementById("result").textContent = `${lowerCaseText}`;
                
    //change the result heading
    document.getElementById("text3").innerHTML="TextConverted to LowerCase:";
}
            
// Count Words
function countWords() {
    const str = document.getElementById("input").value.trim(); 
    const wordCount = str.length > 0 ? str.split(/\s+/).length : 0; 
    document.getElementById("result").textContent = ` ${wordCount}`;

    //change the result heading
    document.getElementById("text3").innerHTML="Number of words containe :";
    }

// Count Letters
function countLetters() {
    const str = document.getElementById("input").value.trim(); 
    const letterCount = str.replace(/\s+/g, '').length; // Remove spaces for letter count
    document.getElementById("result").textContent = `${letterCount}`; // Corrected to "Letter Count"

    //change the result heading
    document.getElementById("text3").innerHTML="Number of Characters containe:";
}

// Title Case
function titleCase() {
    const str = document.getElementById("input").value.trim(); 
    const titleStr = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById("result").textContent = titleStr; 

    //change the result heading
    document.getElementById("text3").innerHTML="Text coverted to Title Case :";
}

// Reverse String
function reverseString() {
    const str = document.getElementById("input").value.trim(); 
    const reverseStr = str.split('').reverse().join('');
    document.getElementById("result").textContent = reverseStr; 

    //change the result heading
    document.getElementById("text3").innerHTML="Text coverted to Reverse :";
}

// Remove space
function removeSpace() {
    const str = document.getElementById("input").value.trim(); 
    const removeSpaceStr = str.trim().replace(/\s+/g, ' ');
    document.getElementById("result").textContent = removeSpaceStr; 

    //change the result heading
    document.getElementById("text3").innerHTML="Extra Space Removed Text :";
}

// Clear
function clearContent() {
    document.getElementById('input').value="";
    document.getElementById("result").innerHTML="";

    //change the result heading
    document.getElementById("text3").innerHTML="Cleared";
            
}
