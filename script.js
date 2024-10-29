document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll Functionality
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - 20,
            behavior: "smooth"
        });
    }

    // Image Lazy Loading for Performance
    const projectImages = document.querySelectorAll(".project img");
    projectImages.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Form Submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent!");
        form.reset();
    });
});
