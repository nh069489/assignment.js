// KilometertoMeter
function kilometerToMeter(kilometer){
   var meter = kilometer/1000;
   return meter;
}

 kilometerToMeter(1000);
 //bughetCalculator
 function budgetCalculator(watch,phone,laptop){
    var total = watch*2 + phone*3 + laptop*1;
    return total
 }
 //budgetCalculator(50,100,500);
 //hotelCost
//  function hotelCost(rent1,){
//     for(i=1; i<=10; i++){
//        var rent1 = i * rent1;
//        return rent1;
//     }
//     for(i=11; i<=20; )
//  }

 // Mega Friends
 var megaFriends = ["Rahman", "Salam", "Robi", "Mohiuddin"];
function longest_str(){
   let longest = megaFriends[0];
   for(let i = 0; i < megaFriends.length; i++){
      if(megaFriends[i].length > longest.length){
         longest = megaFriends[i];
      }
   }
   return longest
}
longest_str(megaFriends);



