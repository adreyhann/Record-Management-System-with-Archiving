let folders = [];
let selectedFolderIndex = -1; // Track the selected folder for editing

// Function to add folders to the list
function addFoldersToList() {
    let folderList = $('#folderList');
    folderList.empty();
    folders.forEach(function(folder, index) {
        folderList.append('<li class="list-group-item">' + folder +
            ' <button class="btn btn-primary btn-sm edit-folder" data-index="' + index + '">Edit</button>' +
            ' <button class="btn btn-danger btn-sm delete-folder" data-index="' + index + '">Delete</button>' +
            '</li>');
    });
}

$('#saveFolder').on('click', function() {
    let folderName = $('#folderName').val();
    if (folderName.trim() !== '') {
        if (selectedFolderIndex === -1) {
            // Create a new folder
            folders.push(folderName);
        } else {
            // Edit the selected folder
            folders[selectedFolderIndex] = folderName;
            selectedFolderIndex = -1; // Reset selected folder index
        }
        addFoldersToList();
        $('#folderName').val('');
    }
});

// Event handler for editing a folder
$('#folderList').on('click', '.edit-folder', function() {
    selectedFolderIndex = $(this).data('index');
    $('#folderName').val(folders[selectedFolderIndex]);
});

// Event handler for deleting a folder
$('#folderList').on('click', '.delete-folder', function() {
    let indexToDelete = $(this).data('index');
    folders.splice(indexToDelete, 1);
    addFoldersToList();
    selectedFolderIndex = -1; // Reset selected folder index
    $('#folderName').val('');
});

// Initial folder list display
addFoldersToList();