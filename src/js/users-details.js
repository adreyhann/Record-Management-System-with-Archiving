document.getElementById("settings").addEventListener("click", function() {
    // URL of the content you want to load
    const contentUrl = "Settings.html";

    // Fetch the content using the Fetch API
    fetch(contentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            // Update the content container with the loaded data
            document.getElementById("content-container").innerHTML = data;

        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});

document.getElementById("contact").addEventListener("click", function() {
    // URL of the content you want to load
    const contentUrl = "contact.html";


    // Fetch the content using the Fetch API
    fetch(contentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            // Update the content container with the loaded data
            document.getElementById("content-container").innerHTML = data;

        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});

