$(document).ready(function() {

   //definicion de variables para api
   const key ="6c5c6ac9f550755964cccfe701e605e2"
   const idioma= "es"
   const pais="ar"
   const limit = 30
   const offset = 1
   const busqueda = ""
   const apiUrl = "http://api.mediastack.com/v1/news?access_key="+key+"&keywords="+busqueda+"&languages="+idioma+"&countries="+pais+"&limit="+limit+"&offset="+offset

   //inicializar datatables, setear las columnas
      $('#noticias').DataTable({
         ajax: {
         url: apiUrl,
         dataType:"json",
      },
      columns: [
         { data: "author" },
         { data: "title" },
         { data: "description" },
      ],

    })  
   
   //se quita el evento default de search para optimizar busqueda
   $('.dataTables_filter input').unbind().keyup(); 
   //se agrega un nuevo evento a la tecla enter
   $('.dataTables_filter input').keypress(function(e) { 
      if (e.which == 13){
         //se genera la nueva url
         let newUrl = "http://api.mediastack.com/v1/news?access_key="+key+"&keywords="+$(this).val()+"&languages="+idioma+"&countries="+pais+"&limit="+limit+"&offset="+offset
         //hago un reload de la peticion
         $('#noticias').DataTable().ajax.url(newUrl).load();
    
     }
   });
} );
   

