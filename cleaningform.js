document.addEventListener('DOMContentLoaded', function () {
    var cleaningForm = document.getElementById('cleaningForm');
    var maintenanceReport = document.getElementById('maintenanceReport');

    // Add an event listener for form submission
    cleaningForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        alert('Your toilet cleaning request has been submitted. Thank you!');
        
        cleaningForm.reset();
    });

    maintenanceReport.addEventListener('submit', function (event) {
        event.preventDefault();

        alert('Your maintenance report has been submitted. Thank you!');
        
        maintenanceReport.reset();
    });
});
