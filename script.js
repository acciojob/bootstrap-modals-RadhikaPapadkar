//your code here
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Modal Example</title>
    <!-- Bootstrap 5.0 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <!-- Button to open modal -->
    <button id="open-modal" class="btn btn-primary mt-5">Open Modal</button>

    <!-- Modal Structure -->
    <div class="modal fade" id="newton-modal" tabindex="-1" aria-labelledby="newton-modal-label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h5 class="modal-title" id="newton-modal-label">New Modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dui quam. Integer feugiat sollicitudin urna, et lobortis augue cursus sit amet.</p>
                </div>
                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS & Popper.js (required for modal functionality) -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>

    <!-- Custom JavaScript for controlling modal -->
    <script>
        document.getElementById('open-modal').addEventListener('click', function () {
            // Create a new instance of Bootstrap's modal
            var myModal = new bootstrap.Modal(document.getElementById('newton-modal'));
            // Show the modal
            myModal.show();
        });
    </script>
</body>
</html>
