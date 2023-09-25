// $(document).ready(function() {
//     const table = $('#example').DataTable();

//     // Add a new row with a file input field
//     $('#addRow').on('click', function() {
//         table.row.add([
//             'John Doe',
//             'Admin',
//             'doe@gmail.com',
//             '<input type="file" class="file-upload" accept=".pdf, .docx" accept="image/*">'
//         ]).draw();
//     });

//     // Handle file upload change event
//     $('#example tbody').on('change', '.file-upload', function() {
//         var file = this.files[0];
//         var fileName = file.name;
//         // You can now handle the uploaded file (e.g., validate, process, store, etc.)
//         // For demonstration, we'll simply display the file name.
//         alert('File uploaded: ' + fileName);
//     });
// });

// $('#example tbody').on('change', '.file-upload', function() {
//     const file = this.files[0];
//     if (file && file.type.startsWith('image/')) {
//         // Read and display the image as a preview
//         const reader = new FileReader();
//         reader.onload = function(event) {
//             const previewColumn = $(this).closest('tr').find('td:eq(3)');
//             previewColumn.html('<img src="' + event.target.result + '" width="100" height="100">');
//         }.bind(this);
//         reader.readAsDataURL(file);
//     }
// });

// $(document).ready(function () {
// 	const table = $('#example').DataTable({
        
// 		columnDefs: [
// 			{
// 				targets: [0], // Target the first column (plus icon)
// 				orderable: false, // Disable sorting for this column
// 				className: 'details-control', // Add a class for styling
// 			},
// 		],
// 		order: [[1, 'asc']], // Sort by the second column by default
// 	});

// 	// Handle the click event on the plus icon to toggle the additional data
// 	$('#example tbody').on('click', 'td.details-control', function () {
// 		var tr = $(this).closest('tr');
// 		var row = table.row(tr);

// 		if (row.child.isShown()) {
// 			// This row is already open; close it
// 			row.child.hide();
// 			tr.removeClass('shown');
// 		} else {
// 			// Open this row
// 			var additionalData =
// 				'<div class="details-content"><a href="">View Files</a></div>';
// 			row.child(additionalData).show();
// 			tr.addClass('shown');
// 		}
// 	});
// });
