// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', null);
    }
});

// Scroll ke atas
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// filter produknya
if (document.querySelector('.filter-btn')) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            productItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// validasi formnya
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.style.borderColor = 'var(--color-2)';
            nameInput.style.borderWidth = '3px';
            isValid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderColor = 'var(--color-1)';
            nameInput.style.borderWidth = '2px';
        }
        
        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = 'var(--color-2)';
            emailInput.style.borderWidth = '3px';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'var(--color-1)';
            emailInput.style.borderWidth = '2px';
        }
        
        // If valid, show success modal
        if (isValid) {
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            contactForm.reset();
        }
    });

    // Real-time validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            nameError.style.display = 'none';
            nameInput.style.borderColor = 'var(--color-1)';
            nameInput.style.borderWidth = '2px';
        }
    });

    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emailInput.value)) {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'var(--color-1)';
            emailInput.style.borderWidth = '2px';
        }
    });
}
