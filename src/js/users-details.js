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

            //  // Add the 'active' class to the clicked button
            //  document.getElementById("settings").classList.add("active");

            //  // Remove the 'active' class from other items
            //  const items = document.querySelectorAll(".item");
            //  items.forEach(item => {
            //      item.classList.remove("active");
            //  });
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});

document.getElementById("places-lives").addEventListener("click", function() {
    // URL of the content you want to load
    const contentUrl = "places-lives.html";


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

            // // Add the 'active' class to the clicked button
            // document.getElementById("places-lives").classList.add("active");

            // // Remove the 'active' class from other items
            // const items = document.querySelectorAll(".item");
            // items.forEach(item => {
            //     item.classList.remove("active");
            // });
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

            // // Add the 'active' class to the clicked button
            // document.getElementById("").classList.add("active");

            // // Remove the 'active' class from other items
            // const items = document.querySelectorAll(".item");
            // items.forEach(item => {
            //     item.classList.remove("active");
            // });
        })
        .catch(error => {
            console.error("Error fetching content:", error);
        });
});