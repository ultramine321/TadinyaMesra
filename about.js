// Function to animate the counter
function animateCounter(element, target) {
    const speed = 200; // Adjust the speed here
    const updateCount = () => {
        const count = +element.innerText;
        const increment = target / speed;

        if (count < target) {
            element.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            element.innerText = target;
        }
    };

    updateCount();
}

// Use Intersection Observer to detect when elements are in viewport
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target;
            const target = +numberElement.getAttribute('data-target');
            animateCounter(numberElement, target);
            observer.unobserve(numberElement); // Stop observing once animated
        }
    });
}, options);

// Observe each number element
document.querySelectorAll('.number').forEach(number => {
    observer.observe(number);
});
