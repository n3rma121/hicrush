function typeHeading(elementId, text, index = 0) {
    const element = document.getElementById(elementId);
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => typeHeading(elementId, text, index), 100); // Adjust the delay (in milliseconds)
    } else {
        document.getElementById('arrow').style.opacity = 1; // Show the arrow
    }
}

window.onload = function () {
    typeHeading('headingToType', 'Coding the Path to Your Heart	');
};
function loadProposal() {
    const loadButton = document.getElementById('loadProposalButton');
    const proposalContainer = document.getElementById('proposal');
    loadButton.style.display = 'none'; // Hide the button
    proposalContainer.style.display = 'block'; // Show the proposal content
}


// Adding click event listeners to the buttons
document.getElementById("yesButton").addEventListener("click", function () {
    showPopup("Wow, this is an incredible moment for me. Your 'Yes' has filled my heart with joy and excitement. I promise to cherish and respect the bond we share. Looking forward to embarking on this beautiful journey together.");
});

document.getElementById("noButton").addEventListener("click", function () {
    showPopup("I truly appreciate your honesty. While my feelings are genuine, I respect your current commitment. Your honesty means a lot to me, and I'm glad we can have an open and honest conversation. If things change in the future or if you ever want to talk, feel free to reach out. Wishing you all the happiness.");
});

document.getElementById("dateButton").addEventListener("click", function () {
    showPopup("That sounds like a fantastic idea! I'd love to go on a coffee date with you. It's a wonderful opportunity for us to spend some quality time together. Let's plan a time that works best for both of us. Looking forward to sharing some meaningful conversations and getting to know each other better.");
});
function showPopup(personalNote) {
    const popup = document.getElementById('successPopup');
    const personalNoteElement = popup.querySelector('.personal-note');
    personalNoteElement.textContent = personalNote;
    popup.style.display = 'block';
}

function closeSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
}

async function handleResponse(event) {
    event.preventDefault();
    const response = event.submitter.value;
    let responseMessage = '';
    let personalNote = '';

    if (response === 'yes') {
        responseMessage = 'She said YES :)';

    } else if (response === 'no') {
        responseMessage = "She said NO :(";

    } else {
        responseMessage = "Hurray! Coffee date :)";

    }

    const fetchResponse = await fetch('https://script.google.com/macros/s/AKfycbzeCIPJDQjvb7meXSdf2TdCo-q5kvYiPrl7JdpA7sztu5GqvCCfI-79SjreqCZGgZ3R/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `responseMessage=${encodeURIComponent(responseMessage)}`,
    });

    const googleAppsScriptResponse = await fetchResponse.text(); // Read the response from Google Apps Script

    // Show the success popup only if email sent successfully
    if (googleAppsScriptResponse.includes('Email sent')) {
        showPopup(personalNote);
    }
}
