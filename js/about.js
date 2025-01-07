// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for all internal links (if any are added dynamically in the future)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Call to Action button handler
    const ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("click", () => {
        // Redirect to a signup or contact page
        window.location.href = "/get-started"; // Update URL to match your site's structure
    });

    // Dynamically display the current year in the footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} Elitehaven. All Rights Reserved.`;
    }

    // Reduce the margin between subsections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.marginBottom = "20px"; // Adjust the margin as needed
        section.style.marginTop = "20px"; // Ensure consistency for top margins
    });

    // Interactive feature: Highlight sections on scroll
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active-section");
                } else {
                    entry.target.classList.remove("active-section");
                }
            });
        },
        {
            threshold: 0.3, // Trigger when 30% of the section is visible
        }
    );

    sections.forEach(section => observer.observe(section));

    // Example: Chatbot interaction (if implemented)
    const chatIcon = document.querySelector("#chatbot-icon");
    if (chatIcon) {
        chatIcon.addEventListener("click", () => {
            alert("Chatbot feature is coming soon!"); // Replace with actual chatbot logic
        });
    }
});
