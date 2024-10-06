document.addEventListener('DOMContentLoaded', function() {
    // Handle feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;

        alert(`Thank you, ${name}. Your feedback has been submitted.`);
        
        // Reset the form
        feedbackForm.reset();
    });

    // Handle survey form submission
    const surveyForm = document.getElementById('survey-form');
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const experience = document.querySelector('input[name="experience"]:checked').value;
        const recommend = document.querySelector('input[name="recommend"]:checked').value;

        alert(`Thank you for completing the survey!\nExperience: ${experience}\nRecommend: ${recommend}`);
        
        // Reset the form
        surveyForm.reset();
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}. Your message has been sent.`);
        
        // Reset the form
        contactForm.reset();
    });
});
