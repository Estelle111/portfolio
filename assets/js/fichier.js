/* Read more */
$(document).ready(function(){
    $(".button").click(function () {
      var div= $("#"+this.name);
      div.toggle("slow").siblings().hide("slow");
    });
  }); 