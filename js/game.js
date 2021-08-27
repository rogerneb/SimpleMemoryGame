$(document).ready(function(){ //when HTML is loaded
  var cards = [ //cards
    "1","1","1","1",
    "2","2","2","2",
    "3","3","3","3",
    "4","4","4","4",
    "5","5","5","5"
  ];

  num_flipped_cards = 0; //count of flipped cards
  flipped_cards = []; //flipped cards id

  cards = shuffle(cards); //randomize cards position
  printcards(cards); //print cards on the board
});


//shufle card array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}


//print the board with shuffled cars
function printcards(a) {
  for (i=0; i < a.length; i++) {
    $("#board").append("<img class='card' id="+i+" src='img/cards/0.png' onclick='flip_card("+i+","+a[i]+")'>");
  }
}

//when click an already flipped card
function ok_flipped(){
  console.log("Card is already flipped and ok.")
}

//when click a taped card
function flip_card(id_card, img_card) {
  //0 cards clicked
  if (num_flipped_cards == 0){
    //save num of flipped cards and his ids
    num_flipped_cards++;
    flipped_cards.push(id_card);
    //flip the card
    $("#"+id_card).attr("src","img/cards/"+img_card+".png");
    $("#"+id_card).attr("src","img/cards/"+img_card+".png");
  //1 card clicked
  }else if (num_flipped_cards == 1){
    //save num of flipped cards and his ids
    num_flipped_cards++;
    flipped_cards.push(id_card);
    $("#"+id_card).attr("src","img/cards/"+img_card+".png");
    //if cards have the same src (same image), but different* id: BINGO. *NOTE: we need to know that the id is different because otherwise we would be clicking on the same card twice
    if ($("#"+flipped_cards[0]).attr("src") == $("#"+flipped_cards[1]).attr("src") && flipped_cards[0] != flipped_cards[1]) { //BINGO
        //change cards with dissabled cards (_OK images)
        for (n = 0; n < flipped_cards.length; n++) {
          $("#"+flipped_cards[n]).attr("onclick","ok_flipped()");
          $("#"+flipped_cards[n]).attr("src","img/cards/"+img_card+"_OK.png");
          $("#"+flipped_cards[n]).attr("id",flipped_cards[n]+"OK");
        }
        //reset counts
        num_flipped_cards = 0;
        flipped_cards = [];
    }
  //two cards flipped
  }else if (num_flipped_cards == 2) { //2 cards flipped
    for (n = 0; n < flipped_cards.length; n++) {
      $("#"+flipped_cards[n]).attr("src","img/cards/0.png");
    }
    //reset counts
    num_flipped_cards = 0;
    flipped_cards = [];
  }
}
