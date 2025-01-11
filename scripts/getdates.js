document.addEventListener("DOMContentLoaded", function() {
   
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p:first-child').innerHTML = '&copy; ' + currentYear + ' | Caio Eduardo Jesus de Paula | Brasil';

    
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').innerHTML = 'Last Modified: ' + lastModifiedDate;
});
