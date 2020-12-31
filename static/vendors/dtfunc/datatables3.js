// - DATA TABLES complete with buttons

$(document).ready(function() {
    /* tips for datatables
   css--hover, cell-border, responsive
   js --{ paging:t/f(no pagination)
   		lengthChange:t/f (filter data button)
   		scrollY:"px/vh (pixel/viewhieght)"(vertical scroll based on pixel given or vh),
   		scrollCollapse:t/f ()
   		scrollX:t/f
   		lengthChange: true,
   		scrollX:true,
   		//scrollCollapse:true,
 dom:"lp",
 	dom:"lfrtip",



 $(document).ready(function () {
        $('.menuTable').dataTable({
            "pagingType": "full_numbers",
            "order": [[0, "asc"]],
            "language": {
                "lengthMenu": "Visa _MENU_ st per sida",
                "zeroRecords": "Inget hittades, tyvärr!",
                "info": "Visar sida _PAGE_ av _PAGES_",
                "infoEmpty": "Inget hittades",
                "infoFiltered": "(sökning mellan totalt _MAX_ beställningar)",
                "sSearch": "Sök:",
                "oPaginate": {
                    "sFirst": "Första",
                    "sPrevious": "Föregående",
                    "sNext": "Nästa",
                    "sLast": "Sista"
                }
            }

        });
    });















*/

    var table = $('#example').DataTable( {

        language: {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        },





        dom: 'Bfrtilp',



        buttons: [{
            extend: 'excelHtml5',
            text: '<i class="ui icon sheet"></i> ',
            titleAttr: 'Export a Excel',
            className: 'ui button primary'
        },
            {
                extend: 'pdfHtml5',
                text: '<i class="ui icon book"></i> ',
                titleAttr: 'Export a PDF',
                className: 'ui button green'
            },
            {
                extend: 'print',
                text: '<i class="ui icon print"></i> ',
                titleAttr: 'print records',
                className: 'ui button secondary'
            },
        ]
        //buttons: ['colvis', 'excel', 'pdf' ]
        //removed copy btn
    });
    table.buttons().container()
    .appendTo($('div.eight.column:eq(0)', table.table().container()));


});





/*
datatables functions

*/