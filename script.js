console.log("JS is connected");

//Load saved mode
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
}

//Toggle mode
document.addEventListener("DOMContentLoaded", () => {
    const darkToggle = document.getElementById('darkToggle');

    // Save the user's preference
    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            if (document.body.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
});

// Motivational Quote API feature
document.addEventListener("DOMContentLoaded", () => {
    async function loadQuote() {
        const quoteElement = document.getElementById("quote");

        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();

            quoteElement.textContent = `${data.content} — ${data.author}`;
        } catch (error) {
            quoteElement.textContent = "Stay positive and keep moving forward!";
        }
    }

    loadQuote();
});


    //GitHub API feature to display recent repositories
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('github-projects');
    const username = container.getAttribute('data-user');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "No public GitHub projects yet."; // Clear the loading text

            data.slice(0, 5).forEach(repo => { // Display only the first 5 repositories
                const item = document.createElement("p");
                item.textContent = repo.name;
                container.appendChild(item);
            });
        })
        .catch(error => {
            container.innerHTML = "Unable to load GitHub projects.";
            console.error(error);
        });
});
