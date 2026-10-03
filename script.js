// =========================
// DARK / LIGHT THEME
// =========================

const themeButton = document.getElementById('themeButton');

if (themeButton) {
    themeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        
        // Update icon
        const icon = themeButton.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
        }
    });
}

// =========================
// PROJECT FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filterValue = button.getAttribute("data-filter");

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectItems.forEach((project) => {

            const projectCategory = project.getAttribute("data-category");

            if (
                filterValue === "all" ||
                projectCategory.includes(filterValue)
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});


// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


// Email validation function
const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};


// Clear previous messages
const clearMessages = () => {
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
};


// Form submit event
contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    clearMessages();

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Subject validation
    if (subjectInput.value.trim() === "") {
        subjectError.textContent = "Please enter a subject.";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

    // Success message
    if (isValid) {

        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();
    }
});


// =========================
// CURRENT YEAR IN FOOTER
// =========================

const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = currentYear;
}