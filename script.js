document.addEventListener('DOMContentLoaded', () => {
    // Simulate a loading delay
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // 3-second loading screen delay

    // Original list items
    const originalItems = [
        'Learn JavaScript', 'Work on project', 'Read a book', 'Go for a walk',
        'Code a website', 'Attend a meeting', 'Write an article', 'Watch a documentary',
        'Plan next week', 'Play a sport', 'Listen to music', 'Cook a new recipe'
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

    // Shuffle the original items
    const shuffledItems = shuffleArray([...originalItems]);

    // Split items into groups for each day
    const dayGroups = {
        wednesday: shuffledItems.slice(0, 4),
        thursday: shuffledItems.slice(4, 8),
        friday: shuffledItems.slice(8)
    };

    // Function to type out each item letter by letter
    function typeOutText(text, element, delay = 100) {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, delay);
    }

    // Function to populate the list with the typewriter effect
    const populateList = (day, items) => {
        const listElement = document.getElementById(`${day}-list`);
        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listElement.appendChild(listItem);
            setTimeout(() => typeOutText(item, listItem), index * 800); // Delay each item
        });
    };

    // Populate the lists for each day
    Object.keys(dayGroups).forEach(day => {
        populateList(day, dayGroups[day]);
    });
});
