$(document).ready(function() {
    $('.dropdown-item').on('click', function() {
        var selectedRole = $(this).data('role');
        $('#selectedRole').val(selectedRole);
    });
});