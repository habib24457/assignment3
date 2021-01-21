function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}

function budgetCalculator(watch,mobile,laptop){
    if(watch<0 || mobile<0 || laptop<0){
        return "Invalid Input";
    }else{
        var watchPrice = watch*50;
        var mobilePrice = mobile*100;
        var laptopPrice = laptop*500;
        var totalPrice = watchPrice+mobilePrice+laptopPrice;
        return totalPrice;
    } 
}

function hotelCost(daysNum){
    if(daysNum<0){
        return "Invalid Input";
    }
    else if(daysNum >0 && daysNum<=10 ){
        var firstPrice = daysNum*100;
        return firstPrice;
    }else if(daysNum>10 && daysNum<=20){
        var restDays=daysNum-10;
        var secondPrice = 1000 + (restDays *80);
        return secondPrice;
    }else{
        var finalDays = daysNum-20;
        var finalPrice = 1800 + (finalDays*50);
        return finalPrice;
    }
}

function megaFriend(friendName){
    var megaName = " ";
    //storing the names 
    for(var i=0;i<friendName.length;i++){
        friendName[i];  
    }

    //comparing which name is the biggest
    for(var j=0; j<friendName.length;j++){
        if(friendName[j].length > megaName.length){
            megaName = friendName[j];
        }
    }
   return megaName;
}


var result = kilometerToMeter(2);
console.log("After convertiing Kilometer to Meter = ",result);

var totalBudget = budgetCalculator(2,3,5);
console.log("Total Budget of watch,mobile and laptop = ",totalBudget);

var totalHotelCost = hotelCost(15);
console.log("Total hotel cost = ",totalHotelCost);

var names = ['Habib','Jishan','Rana','Rafiq','Shakil','RahmanHabib'];
var longestName = megaFriend(names);
console.log("Mega freind is ",longestName);