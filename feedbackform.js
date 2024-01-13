function feedbackForm() {
    document.getElementById('feedback-box').style.display = 'block';
}

function closeFeedbackForm() {
    document.getElementById('feedback-box').style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('feedback-box');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};