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
    document.getElementById('display-image').src = "https://imgs.search.brave.com/-oqeKIn6eloY2MvsK4_ZcizsmqMwIPngabGkcM-aQQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkyNjQw/NjQucG5n"; // Success GIF
    document.querySelector('.buttons').style.display = 'none';
}