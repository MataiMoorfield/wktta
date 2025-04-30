 $(document).ready(function () {
            var table = $('#example').DataTable({
                ajax: 'https://script.google.com/a/macros/moorfield.co.nz/s/AKfycbxzSjupb9NoGxWBuriGMfmk9pW1rlqdMOscXn196wf3pDlLr-EwBrFoM745617adu5Kag/exec',
                columns: [
                    { data: 'Time', orderable: false }, // Disable sorting on the 'Time' column
                    { data: 'Player 1', orderable: false }, // Disable sorting on the 'Player 1' column
                    { data: 'Player 2', orderable: false }, // Disable sorting on the 'Player 2' column
                    { data: 'Table', orderable: false }, // Disable sorting on the 'Table' column
                    { data: 'Match', orderable: false }  // Disable sorting on the 'Match' column
                ],
                paging: false,
                info: false,
                lengthChange: false
            });

            // Auto reload the table every 10 seconds
            setInterval(function () {
                table.ajax.reload();
            }, 10000);
        });