setInterval(function(){
  $("#titulo").animate({
      color:"white"
  },1000,function(){
      $(this).animate({
          color:"yellow"
      });
  });
}, 1000);
for(i=1;i<=7;i++){
   var rand=Math.floor(Math.random()*(5-1))+1;
   $(".col-"+i).html("<img class='elemento' src='image/"+rand+".png'/>");
   var rand=Math.floor(Math.random()*(5-1))+1;
   $(".col-"+i).find("img").before("<img class='elemento' id='next' src='image/"+rand+".png'/>");
   var rand=Math.floor(Math.random()*(5-1))+1;
   $(".col-"+i).find("#next").before("<img class='elemento' id='before' src='image/"+rand+".png'/>");
   var rand=Math.floor(Math.random()*(5-1))+1;
   $(".col-"+i).find("#next").before("<img class='elemento' id='almost' src='image/"+rand+".png'/>");
   var rand=Math.floor(Math.random()*(5-1))+1;
   $(".col-"+i).find("#next").before("<img class='elemento' id='almost' src='image/"+rand+".png'/>");
}
$("img").css("margin-bottom","10%");
$( function() {
    $( ".droppable" ).sortable({
      revert: true
    });
    $( "img" ).draggable({
      connectToSortable: ".droppable",
      revert: "true",
      helper: "clone"
    });
    $( "img, .droppable" ).disableSelection();
  } );
