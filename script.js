$(document).ready(function () {
    var table = $('#example').DataTable({
        ajax: 'https://script.google.com/a/macros/moorfield.co.nz/s/AKfycbxzSjupb9NoGxWBuriGMfmk9pW1rlqdMOscXn196wf3pDlLr-EwBrFoM745617adu5Kag/exec',
        columns: [
            { data: 'Time', orderable: false },
            { data: 'Player 1', orderable: false },
            { data: 'Player 2', orderable: false },
            { data: 'Table', orderable: false },
            { data: 'Match', orderable: false }
        ],
        paging: false,
        info: false,
        lengthChange: false
    });

    // auto reload 10 sec
    setInterval(function () {
        table.ajax.reload();
    }, 10000);
});