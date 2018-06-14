$(document).ready(function() {

var data = {
  totalCurrent:0,
  totalLPS: 0
};

setInterval(goGo,1000);

function goGo() {

  data.totalCurrent += data.totalLPS;
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#lps").text((data.totalLPS).toFixed(1));
}




$("#likeButton").click(function (){

  data.totalCurrent ++;
  // $(this).css('background-color', 'blue');
  updateReport();
})


$( "#likeButton" ).mousedown(function() {

  $( "#likeButton" ).css('background-color', 'rgb(75,97,173)');
});

$( "#likeButton" ).mouseup(function() {

  $( this ).css('background-color', 'white');
});



$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  var counter = $(this).siblings( ".adtitle" ).children("span").text();
  if ($(this).data( "cost" ) <= data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalLPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );

    $(this).siblings( ".adtitle" ).children("span").text(parseInt(counter) + 1);
    // $(this).siblings( ".adtitle" ).children("span").html(parseInt(+1));


    // console.log($( '#testCounter' ).text());
    // console.log(parseInt(counter) + 1);






  }
  updateReport();
})

});
