document.addEventListener('DOMContentLoaded', function() {
    // Sample jobs data
    const jobs = [
        { title: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', description: 'Develop scalable web applications.' },
        { title: 'Data Scientist', company: 'Facebook', location: 'Menlo Park, CA', description: 'Analyze large datasets to drive business decisions.' },
        { title: 'Product Manager', company: 'Amazon', location: 'Seattle, WA', description: 'Lead cross-functional teams to launch new products.' }
    ];

    // Load jobs into the job-list div
    const jobList = document.getElementById('job-list');
    function displayJobs() {
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.className = 'job';
            jobDiv.innerHTML = `<h3>${job.title}</h3><p><strong>Company:</strong> ${job.company}</p><p><strong>Location:</strong> ${job.location}</p><p>${job.description}</p>`;
            jobList.appendChild(jobDiv);
        });
    }
    displayJobs();

    // Handle job posting
    const jobForm = document.getElementById('job-form');
    jobForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('job-title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;

        // Add the new job to the jobs array
        jobs.push({ title, company, location, description });

        // Display the updated jobs list
        displayJobs();

        // Reset the form
        jobForm.reset();

        alert('Job posted successfully!');
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}. Your message has been received.`);
        
        // Reset the form
        contactForm.reset();
    });
});
