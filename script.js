$(document).ready(function () {
    var table = $('#example').DataTable({ // spreadsheet link (JSON web app)
        ajax: 'https://script.google.com/macros/s/AKfycbxeWPkvb0SqLdXfHm1c98zpQ30tGk3H8c6u4CxhsJqUUDbG4UwNnXrie17KcCwgn7Lk/exec',
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

    // reload 10 sec
    setInterval(function () {
        table.ajax.reload();
    }, 10000);
});