document.addEventListener('DOMContentLoaded', function() {
    // Sample event data
    const events = [
        { title: 'Annual Alumni Meet', date: 'December 15, 2024', location: 'College Auditorium', description: 'A gathering of alumni from all batches to reconnect and network.' },
        { title: 'Technical Workshop', date: 'January 10, 2025', location: 'College Auditorium', description: 'A workshop on the latest trends in technology, led by industry experts.' },
        { title: 'Reunion 2025', date: 'March 5, 2025', location: ' Cricket Ground', description: 'A reunion event for the batch of 2020.' }
    ];

    // Load events into the event-list div
    const eventList = document.getElementById('event-list');
    function displayEvents() {
        eventList.innerHTML = '';
        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.innerHTML = `<h3>${event.title}</h3><p><strong>Date:</strong> ${event.date}</p><p><strong>Location:</strong> ${event.location}</p><p>${event.description}</p>`;
            eventList.appendChild(eventDiv);
        });
    }
    displayEvents();

    // Handle reunion registration form submission
    const reunionForm = document.getElementById('reunion-form');
    reunionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const batch = document.getElementById('batch').value;
        const email = document.getElementById('email').value;

        alert(`Thank you, ${name}. You have been registered for the reunion.`);

        // Reset the form
        reunionForm.reset();
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
