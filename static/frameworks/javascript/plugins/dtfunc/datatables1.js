// - DATA TABLES complete with buttons
//		    $('#example').DataTable();
//		} );
$(document).ready(function() {

		var table = $('#example').DataTable( {
	        lengthChange: true,
	        responsive:true,
	        buttons: ['excel', 'pdf', 'colvis' ] //remove 'copy'
	    } );
	    table.buttons().container()
	        .appendTo( $('div.eight.column:eq(0)', table.table().container()) );
});