document.getElementById('refresh').addEventListener('click', fetchScore);

function fetchScore() {
    document.getElementById('scoreImage').src = "http://localhost:3000/latest-screenshot?" + new Date().getTime();
}

fetchScore();
