//datatables plugin function logic

$(document).ready(function() {

    var table = $('#DT-table').DataTable( {
        lengthChange: true,
        responsive: true,
        //order by certain columns
        "order": [[0, 'asc'], [1, 'asc'], [2, 'asc']],
        //change some text
        language: {
            "lengthMenu": "display _MENU_ products",
            //"info": "displaying products _PAGE_ of _PAGES_",
            "zeroRecords": "No matching products available",
            //  "info": "total products",
            //  "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            //  "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "enter product name:",

            "sProcessing": "searching product...",
        },
        "columnDefs": [
            //defs
            {
                "searchable": false, "targets": [0]}
            //end defs
        ]

    });

});