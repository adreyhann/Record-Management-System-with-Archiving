document.getElementById('file-input').addEventListener('change', function() {
    const fileInput = document.getElementById('file-input');
    const profileImage = document.getElementById('profile-image');
    
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
