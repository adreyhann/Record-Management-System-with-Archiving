$(document).ready(function () {
    // Add a click event listener to the button
    $("#change-profile-btn").click(function () {
        // Trigger the hidden file input
        $("#file-input").trigger("click");
    });

    // Listen for changes in the file input
    $("#file-input").change(function () {
        var fileInput = this;
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Set the selected image as the source of the profile picture
                $("#profile-image").attr("src", e.target.result);
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    });
});
