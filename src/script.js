document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to activate a tab
    function activateTab(tabId) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Remove active class from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('border-b-2', 'border-red-600', 'text-red-800');
            button.classList.add('text-red-700');
        });
        
        // Show the selected tab content
        document.getElementById(tabId).classList.remove('hidden');
        
        // Set active class on the clicked button
        const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
        activeButton.classList.add('border-b-2', 'border-red-600', 'text-red-800');
        activeButton.classList.remove('text-red-700');
    }
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });
    
    // Activate the first tab by default
    activateTab('tab1');
});