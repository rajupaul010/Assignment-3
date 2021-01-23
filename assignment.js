
//Repository Link: 



// kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer/1000;
    return meter;
}
var result = kilometerToMeter(300000);
console.log(result);


// budgetCalculator

function budgetCalculator (clock, phone, laptop) {
    var result = (clock * 50 + phone * 100 + laptop * 500);
    return result;
}
var total = budgetCalculator(100, 10, 20);
console.log(total);


//hotelCost

var hotelCost = function (stayDays)
{
    if (stayDays > 0 && stayDays <= 10 ) {
        hotelCost = stayDays * 100;
        return hotelCost;
    }
    else if (stayDays > 10 && stayDays <= 20) {
        hotelCost = 1000 + ((stayDays - 10) * 80);
        return hotelCost;
    }
    else (stayDays > 20); {
        hotelCost = 1000 + 800 + ((stayDays - 20) * 50);
        return hotelCost;
    }
}
var hotelCost = hotelCost (25);
console.log(hotelCost);

//megaFriend

function megaFriend(arr) {
    var word = "";
        for (i = 0; i < arr.length; i++){
            if (word.length < arr[i].length){
                word = arr[i];
        }
    }
        return word;
}
console.log(megaFriend(['korim', 'monir', 'bashar', 'fokiruddin', 'applemia', 'motamia']));












