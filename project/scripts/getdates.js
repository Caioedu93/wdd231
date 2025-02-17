document.addEventListener("DOMContentLoaded", function () {
    // Current year
    let currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p:last-child').innerHTML = '&copy; ' + currentYear + ' WDD231 | Caio Eduardo Jesus de Paula | Brasil';

    // Footer content
    let footerContent = `
        <div class="footer-contact">
            <h3>Contact Information</h3>
            <p>Phone: +1 (555) 987-6543 | Email: contact@fakecompany.com</p>
        </div>
    `;
    document.getElementById('footer-content').innerHTML = footerContent;

    // Last modified date
    let lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerHTML = 'Last Update: ' + lastModifiedDate;
});
