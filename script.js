document.addEventListener('DOMContentLoaded', () => {
    // Simulate a loading delay
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // 2-second loading screen delay

    // Data for the week
    const listItems = [
        { day: 'Wednesday', items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
        { day: 'Thursday', items: ['Item 5', 'Item 6', 'Item 7', 'Item 8'] },
        { day: 'Friday', items: ['Item 9', 'Item 10', 'Item 11', 'Item 12'] }
    ];

    // Function to populate the lists
    const populateList = (day, items) => {
        const listElement = document.getElementById(`${day.toLowerCase()}-list`);
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listElement.appendChild(listItem);
        });
    };

    // Populate the lists with data
    listItems.forEach(group => {
        populateList(group.day, group.items);
    });
});
