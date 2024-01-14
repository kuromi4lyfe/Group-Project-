document.addEventListener('DOMContentLoaded', function () {
    var cleaningForm = document.getElementById('cleaningForm');

    // Add an event listener for form submission
    cleaningForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        alert('Your toilet cleaning request has been submitted. Thank you!');
        
        cleaningForm.reset();
    });
});