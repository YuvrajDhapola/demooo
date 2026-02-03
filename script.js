function moveButton() {
    const noButton = document.getElementById('noButton');
    
    // Calculate random position within the screen
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function handleYes() {
    document.getElementById('question').innerText = "YAY! 🥳";
    document.getElementById('display-image').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXN6cmN6cmN6cmN6cmN6cmN6cmN6cmN6cmN6cmN6cmN6cmN6cmN6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l0Ex0Gv8U5O8t5gxa/giphy.gif"; // Success GIF
    document.querySelector('.buttons').style.display = 'none';
}