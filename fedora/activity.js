function toggleContent(sectionID) {
    const content = document.getElementById(sectionID);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function showSubscriptionForm() {
    const mainContent = document.getElementById("mainContain");
    const subscriptionForm = document.getElementById("formContain");

    // Toggle visibility of the main content and the subscription form
    if (mainContent.style.display === "none") {
        mainContent.style.display = "block";
        subscriptionForm.style.display = "none";
    } else {
        mainContent.style.display = "none";
        subscriptionForm.style.display = "block";
    }
}

function showOnlyMainContain() {
    const mainContain = document.getElementById("mainContain");
    const subscriptionForm = document.getElementById("formContain");

    if(mainContain.style.display === "none"){
        mainContain.style.display = "block";
        subscriptionForm.style.display = "none";
    }
}
