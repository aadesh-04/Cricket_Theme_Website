document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function nextStep(step) {
    document.querySelectorAll('.step').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelector('.step-' + step).style.display = 'block';
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration Submitted');
});
