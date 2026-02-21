// Toggle button functionality
const toggleButtons = document.querySelectorAll('.toggle-items .btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active state from all buttons
        toggleButtons.forEach(btn => {
            btn.classList.remove('bg-[#3B82F6]', 'text-white');
            btn.classList.add('bg-white', 'text-black');
        });
        
        // Add active state to clicked button
        button.classList.remove('bg-white', 'text-black');
        button.classList.add('bg-[#3B82F6]', 'text-white');
    });
});