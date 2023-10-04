document.getElementById("archives-settings").addEventListener("click", function() {
    // URL of the content you want to load
    const contentUrl = "archives-settings.html";

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
