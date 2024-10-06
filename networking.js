document.addEventListener('DOMContentLoaded', function() {
    // Sample members data
    const members = [
        { name: 'Kamlesh Bishnoi', batch: '2020', branch: 'Elecrtical Engineering' , job: 'Technician at UG Internationals' },
        { name: 'Madan purohit', batch: '2020', branch: 'Mechanical Engineering' , job: 'manager at JSW' },
        { name: 'Gravit singh', batch: '2020', branch: 'Computer Science Engineering' , job: 'Product Manager at Roshan petroleum' }
    ];


    const alumni = [
        { name: 'John Doe', batch: '2010', job: 'Software Engineer at Google' },
        { name: 'Jane Smith', batch: '2012', job: 'Data Scientist at Facebook' },
        { name: 'Mike Johnson', batch: '2015', job: 'Product Manager at Amazon' },
        { name: 'Alice Brown', batch: '2010', job: 'Network Engineer at Cisco' },
        { name: 'Bob Davis', batch: '2013', job: 'Cybersecurity Analyst at IBM' }
    ];

    // Load members into the member-list div
    const memberList = document.getElementById('member-list');
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';
        memberDiv.innerHTML = `<h3>${member.name}</h3><p>Batch: ${member.batch}</p><p>Branch: ${member.branch}<p><p>Job: ${member.job}</p>`;
        memberList.appendChild(memberDiv);
    });

    // Filter alumni based on search input
    // window.filterAlumni = function() {
    //     const searchValue = document.getElementById('search').value.toLowerCase();
    //     const filteredmember = members.filter(members => 
    //         members.batch.toLowerCase().includes(searchValue)
    //         members.name.toLowerCase().includes(searchValue) ||
    //     );
    //     displayAlumni(filteredAlumni);
    // };

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

