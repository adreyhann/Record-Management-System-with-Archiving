document.getElementById("settings").addEventListener("click", function() {
    // URL of the content you want to load
    const contentUrl = "stud-detail-settings.html";


    // Fetch the content using the Fetch API
    fetch(contentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            
            document.getElementById("content-container").innerHTML = data;

        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});

document.getElementById("location").addEventListener("click", function() {
    
    const contentUrl = "stud-loc.html";


    fetch(contentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            
            document.getElementById("content-container").innerHTML = data;

        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});