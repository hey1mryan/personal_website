document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.opacity = '0.25';
        });

        item.addEventListener('mouseout', function() {
            this.style.opacity = '1';
        });

        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            console.log('Clicked:', targetId); // Debugging line
            console.log('Target Element:', targetElement); // Debugging line
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.log('Target not found'); // Debugging line
            }
        });
    });
});