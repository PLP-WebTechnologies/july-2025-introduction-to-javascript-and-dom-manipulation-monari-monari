document.getElementById("submitBtn").addEventListener("click", function() {
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;


    if (firstName === "" || surname === "" || age === "") {
        alert("Please complete Child Information before submitting!");
    } else if (age < 3) {
        alert("Sorry, the minimum age for admission is 3 years.");
    } else {
        alert("Your application has been submitted successfully!");
    }
});

function collectChildInfo() {
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let surname = document.getElementById("surname").value;
    
    let fullName = firstName;
    if (middleName) {
        fullName += " " + middleName;
    }
    fullName += " " + surname;
    
    return {
        firstName: firstName,
        middleName: middleName,
        surname: surname,
        fullName: fullName,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        interests: document.getElementById("interests").value,
        strengths: document.getElementById("strengths").value,
        personality: document.getElementById("personality").value
    };
}

function formatPreview(data) {
    let nameDisplay = `<b>Name:</b> ${data.fullName}`;
    if (data.middleName) {
        nameDisplay = `<b>First Name:</b> ${data.firstName}<br><b>Middle Name:</b> ${data.middleName}<br><b>Surname:</b> ${data.surname}`;
    } else {
        nameDisplay = `<b>First Name:</b> ${data.firstName}<br><b>Surname:</b> ${data.surname}`;
    }
    
    return `
        <h3> Child Profile</h3>
        <p>${nameDisplay}</p>
        <p><b>Age:</b> ${data.age}</p>
        <p><b>Gender:</b> ${data.gender}</p>
        <p><b>Interests:</b> ${data.interests}</p>
        <p><b>Strengths:</b> ${data.strengths}</p>
        <p><b>Personality:</b> ${data.personality}</p>
    `;
}

function listHealthInfo() {
    let fields = ["Allergies", "Medical", "Diet"];
    let results = "<h3> Health Info</h3>";

    for (let i = 0; i < fields.length; i++) {
        let value = document.getElementById(fields[i]).value;
        results += `<p><b>${fields[i]}:</b> ${value || "None"}</p>`;
    }
    return results;
}

document.getElementById("previewBtn").addEventListener("click", function() {
    let childData = collectChildInfo();
    let previewContent = formatPreview(childData) + listHealthInfo();

    document.getElementById("previewBox").innerHTML = previewContent;
});
