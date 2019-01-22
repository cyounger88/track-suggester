$(document).ready(function() {
    // this is attached to the form. .submit for the submit button
      $("#date").submit(function(event) {
        event.preventDefault();
    
        var result = parseInt($("#unit1").val());
        var result2 = parseInt($("#unit2").val());
        var result3 = parseInt($("#unit3").val());
        var result4 = parseInt($("#unit4").val());
        var result5 = parseInt($("#unit5").val());

        var results = parseInt((result + result2 + result3 + result4 + result5));
        console.log(results);
       
    
        if (results >= 4) {
         $('#output').text("You should become an engineer! Learn C#/.NET JS side");
         
         console.log("1 works");
        } else if (results < 4 && results > 1 ) {
          $('#output').text("You should become a web developer! Learn CSS/Design");
            console.log("2 works");
            
        } else {
         $('#output').text("Start with HTML and watch computer science courses on edx.org");
          console.log("made to end");
          
         
        };

        
    
      });
    
    
    });