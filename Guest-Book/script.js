const messageForm = document.getElementById("message-form");
const messagesList = document.getElementById("messages-list");

// Sample messages (for demonstration purposes)
const sampleMessages = [
  {
    name: "Fenchu Lama",
    email: "fenchu@example.com",
    message: "Great college! Had an amazing experience.",
    affiliation: "Alumni",
    timestamp: new Date(),
  },
  {
    name: "Alina Dahal",
    email: "alina@example.com",
    message: "The faculty here is fantastic.",
    affiliation: "Student",
    timestamp: new Date(),
  },
  // Add more sample messages here...
];

// Function to display messages on the page
function displayMessages(messages) {
  messagesList.innerHTML = "";
  messages.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = message.name;
    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: ${message.email}`;
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message.message;
    const affiliationParagraph = document.createElement("p");
    affiliationParagraph.textContent = `Affiliation: ${message.affiliation}`;
    const timestampParagraph = document.createElement("p");
    timestampParagraph.textContent = `Date: ${message.timestamp.toLocaleString()}`;

    messageDiv.appendChild(nameHeading);
    messageDiv.appendChild(emailParagraph);
    messageDiv.appendChild(messageParagraph);
    messageDiv.appendChild(affiliationParagraph);
    messageDiv.appendChild(timestampParagraph);

    messagesList.appendChild(messageDiv);
  });
}

// Function to handle form submission (For demonstration purposes, it adds a new message to the sampleMessages array)
function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;
  const affiliation = event.target.elements.affiliation.value;
  const timestamp = new Date();

  // Add the new message to the sampleMessages array (for demonstration purposes)
  sampleMessages.push({ name, email, message, affiliation, timestamp });

  // Display the updated messages
  displayMessages(sampleMessages);

  // Clear the form fields
  event.target.reset();
}

// Add event listener for form submission
messageForm.addEventListener("submit", handleSubmit);

// Display the initial messages (for demonstration purposes)
displayMessages(sampleMessages);
