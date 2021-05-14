//datatables plugin function logic

$(document).ready(function() {

    var table = $('#DynamicTable').DataTable( {
        lengthChange: true,
        "lengthMenu": [[10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "order": [],
        "orderFixed": [[2, 'desc']],
        //change some text
        language: {
            "lengthMenu": "products _MENU_ filtered",
            //"info": "displaying products _PAGE_ of _PAGES_",
            "zeroRecords": "No matching products available",
            //  "info": "total products",
            //  "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            //  "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "enter search term :",

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