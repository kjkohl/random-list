document.addEventListener('DOMContentLoaded', () => {
    // Simulate a loading delay
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // 3-second loading screen delay
    
    const originalItems = [
        'Kohl', 'Allman', 'White', 'Karnes',
        'Matako', 'Ezzo', 'Campbell', 'Lemon',
        'Jernigan', 'Studer', 'Bauer', 'Ries'
    ];

    // Shuffle function to randomize the items
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Function to type out each item letter by letter
    function typeOutText(text, element, delay = 50) {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, delay);
    }

    // Function to clear the current lists
    function clearLists() {
        document.getElementById('wednesday-list').innerHTML = '';
        document.getElementById('thursday-list').innerHTML = '';
        document.getElementById('friday-list').innerHTML = '';
    }

    // Function to populate the lists
    function populateLists() {
        clearLists(); // Clear previous lists

        // Shuffle the original items
        const shuffledItems = shuffleArray([...originalItems]);

        // Split items into groups for each day
        const dayGroups = {
            wednesday: shuffledItems.slice(0, 4),
            thursday: shuffledItems.slice(4, 8),
            friday: shuffledItems.slice(8)
        };

        // Populate the list with the typewriter effect
        const populateList = (day, items) => {
            const listElement = document.getElementById(`${day}-list`);
            items.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'list-item';
                listElement.appendChild(listItem);
                setTimeout(() => typeOutText(item, listItem), index * 500); // Delay each item
            });
        };

        // Populate the lists for each day
        Object.keys(dayGroups).forEach(day => {
            populateList(day, dayGroups[day]);
        });
    }

    // Add event listener for regenerate button
    document.getElementById('regenerate-btn').addEventListener('click', () => {
        populateLists();
    });
});
