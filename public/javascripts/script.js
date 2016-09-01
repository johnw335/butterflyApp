$(document).ready(function(){



  $('#awesome_img').click(function(){

    var request = $.ajax({
            dataType: "json",
            url: 'http://localhost:3000/awesome',
            type: "GET"
          })

  });





});

