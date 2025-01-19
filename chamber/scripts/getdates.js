document.addEventListener("DOMContentLoaded", function () {
    // Current year
    var currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p:last-child').innerHTML = '&copy; ' + currentYear + ' WDD231 | Caio Eduardo Jesus de Paula | Brasil';

    // Footer content
    var footerContent = `
        <div class="footer-links"> 
            <h3>Quick Links</h3> 
            <ul> 
                <li><a href="#about-us">About Us</a></li> 
                <li><a href="#services">Services</a></li> 
                <li><a href="#contact-us">Contact</a></li>
            </ul> 
        </div>
        <div class="footer-contact">
            <h3>Contact Information</h3>
            <p>Phone: +1 (555) 987-6543 | Email: contact@fakecompany.com</p>
        </div>
        <div class="footer-newsletter"> 
            <h3>Stay Connected</h3> 
            <p>Sign up for updates from our company.</p> 
            <form> 
                <input type="email" placeholder="Your email address" required> 
                <button type="submit">Sign Up</button> 
            </form> 
        </div>
    `;
    document.getElementById('footer-content').innerHTML = footerContent;

    // Last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerHTML = 'Last Modified: ' + lastModifiedDate;
});
