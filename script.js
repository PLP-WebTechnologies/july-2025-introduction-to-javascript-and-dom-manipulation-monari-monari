//  WEEK 5 ASSIGNMENT: Happy Kids Kindergarten Application Form
// Demonstrating JavaScript Fundamentals: Variables, Conditionals, Functions, Loops, and DOM Manipulation

// ========================================
// PART 1: VARIABLE DECLARATIONS & CONDITIONALS
// ========================================

// Event listener for form submission with conditional validation
document.getElementById("submitBtn").addEventListener("click", function() {
    // Variable declarations for form validation
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    // Conditional statements to validate form data
    if (firstName === "" || surname === "" || age === "") {
        // Conditional check: if any required field is empty
        alert("Please complete Child Information before submitting!");
    } else if (age < 3) {
        // Conditional check: if age is below minimum requirement
        alert("Sorry, the minimum age for admission is 3 years.");
    } else {
        // Conditional check: if all validations pass
        alert("Your application has been submitted successfully!");
    }
});

// ========================================
// PART 2: CUSTOM FUNCTIONS 
// ========================================

// Custom Function 1: Collects and organizes child information
function collectChildInfo() {
    // Variable declarations for name components
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let surname = document.getElementById("surname").value;
    
    // String concatenation to create full name
    let fullName = firstName;
    if (middleName) {
        fullName += " " + middleName;
    }
    fullName += " " + surname;
    
    // Return object with all collected data
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

// Custom Function 2: Formats data for preview display
function formatPreview(data) {
    // Conditional logic for name display formatting
    let nameDisplay = `<b>Name:</b> ${data.fullName}`;
    if (data.middleName) {
        // If middle name exists, show detailed breakdown
        nameDisplay = `<b>First Name:</b> ${data.firstName}<br><b>Middle Name:</b> ${data.middleName}<br><b>Surname:</b> ${data.surname}`;
    } else {
        // If no middle name, show simplified format
        nameDisplay = `<b>First Name:</b> ${data.firstName}<br><b>Surname:</b> ${data.surname}`;
    }
    
    // Return formatted HTML string
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

// ========================================
// PART 3: LOOP EXAMPLES 
// ========================================

// Loop Example 1: For loop to gather health information
function listHealthInfo() {
    // Array of health field IDs
    let fields = ["Allergies", "Medical", "Diet"];
    let results = "<h3> Health Info</h3>";

    // For loop to iterate through health fields
    for (let i = 0; i < fields.length; i++) {
        let value = document.getElementById(fields[i]).value;
        results += `<p><b>${fields[i]}:</b> ${value || "None"}</p>`;
    }
    return results;
}

// Loop Example 2: ForEach loop alternative (demonstrating different loop approach)
function collectParentInfo() {
    // Array of parent information fields
    let parentFields = ["parentName", "relationship", "phone", "email", "address"];
    let parentData = {};
    
    // ForEach loop to collect parent information
    parentFields.forEach(function(fieldId) {
        let element = document.getElementById(fieldId);
        if (element) {
            parentData[fieldId] = element.value;
        }
    });
    
    return parentData;
}

// ========================================
// PART 4: DOM INTERACTIONS 
// ========================================

// DOM Interaction 1: Event listener for preview button
document.getElementById("previewBtn").addEventListener("click", function() {
    // DOM Interaction: Get form data and create preview content
    let childData = collectChildInfo();
    let previewContent = formatPreview(childData) + listHealthInfo();

    // DOM Interaction: Update preview box content
    document.getElementById("previewBox").innerHTML = previewContent;
});

// DOM Interaction 2: Form validation on input (real-time feedback)
document.getElementById("age").addEventListener("input", function() {
    let ageValue = this.value;
    let ageElement = this;
    
    // DOM Interaction: Change input styling based on validation
    if (ageValue < 3) {
        ageElement.style.borderColor = "red";
        ageElement.style.backgroundColor = "#ffe6e6";
    } else if (ageValue > 6) {
        ageElement.style.borderColor = "orange";
        ageElement.style.backgroundColor = "#fff3e6";
    } else {
        ageElement.style.borderColor = "green";
        ageElement.style.backgroundColor = "#e6ffe6";
    }
});

// DOM Interaction 3: Dynamic form field highlighting
document.getElementById("firstName").addEventListener("focus", function() {
    // DOM Interaction: Highlight current field
    this.style.backgroundColor = "#f0f8ff";
    this.style.borderColor = "#007bff";
});

document.getElementById("firstName").addEventListener("blur", function() {
    // DOM Interaction: Remove highlighting when field loses focus
    this.style.backgroundColor = "";
    this.style.borderColor = "";
});
