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
}

// Initial display of all courses
filterCourses('all');
