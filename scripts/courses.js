document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

function displayCourses(courseList) {
    const courseListEl = document.getElementById('course-list');
    courseListEl.innerHTML = '';

    courseList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseCard.innerHTML = `
            <h2>${course.subject} ${course.number}</h2>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;

        
        courseCard.addEventListener('click', () => showCourseDetails(course));

        courseListEl.appendChild(courseCard);
    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

function filterCourses(type) {
    let filteredCourses;
    if (type === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject.startsWith(type));
    }
    displayCourses(filteredCourses);

  
    document.querySelectorAll('.buttons button').forEach(button => button.classList.remove('active'));
    document.querySelector(`.buttons button[data-type="${type}"]`).classList.add('active');
}

function showCourseDetails(course) {
    const courseDetailsDialog = document.getElementById('course-details');
    courseDetailsDialog.innerHTML = `
        <button onclick="closeDialog()">Close</button>
        <h2>${course.subject} ${course.number}</h2>
        <p><strong>Title:</strong> ${course.title}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        <p><strong>Completed:</strong> ${course.completed ? 'Yes' : 'No'}</p>
    `;
    courseDetailsDialog.showModal();
}

function closeDialog() {
    document.getElementById('course-details').close();
}


filterCourses('all');
