function tip_calcFunction() {
    var sum = $("#sum").val();
    var percent = $("#percent").val();
    var numberP = $("#numberP").val();
    sum = parseInt(sum, 10);
    var all = sum * percent / 100;
    var total = (sum * percent / 100) / numberP;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);
    total = parseFloat(total, 10);

    var bill = sum + all;
    $("#result_sum").val(bill);
    $("#result_tip").val(total);

}

document.getElementById("sum").onchange = tip_calcFunction ;


let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("percent");
let currentValue = count.value; 


buttonCountPlus.onclick = function() {
    currentValue = count.value;
    currentValue = parseInt(currentValue,10); 
    if (currentValue <= 99) {
        
        count.value = currentValue + 1;
        
    }
    tip_calcFunction()
};

buttonCountMinus.onclick = function() {
    currentValue = count.value;
    currentValue = parseInt(currentValue,10); 
   if (currentValue >= 2) {
       
    count.value = currentValue - 1;
       
    }
    tip_calcFunction()
}
let buttonCountPlusCheck = document.getElementById("buttonCountPlusCheck");
let buttonCountMinusCheck = document.getElementById("buttonCountMinusCheck");
let countCheck = document.getElementById("numberP");
let currentValueCheck = countCheck.value; 

buttonCountPlusCheck.onclick = function() {
    currentValueCheck = countCheck.value;
    currentValueCheck = parseInt(currentValueCheck,10); 
    if (currentValueCheck <= 99) {
        
        countCheck.value = currentValueCheck + 1;
        
    }
    tip_calcFunction()
};

buttonCountMinusCheck.onclick = function() {
    currentValueCheck = countCheck.value;
    currentValueCheck = parseInt(currentValueCheck,10); 
   if (currentValueCheck >= 1) {
       
    countCheck.value = currentValueCheck - 1;
       
    }
    tip_calcFunction()
}



// function tip_calcFunction() {
//     var sum = document.getElementById("sum").value;
//     var percent = document.getElementById("percent").value;
//     var numberP = document.getElementById("numberP").value;
//     sum = parseInt(sum, 10);

//     var total = (sum * percent / 100) / numberP; 

//     total = Math.round(total * 100) / 100;

//     total = total.toFixed(2);
//     total = parseFloat(total, 10);

//     var bill = sum + numberP*total;
//     document.getElementById("result_sum").value = bill;
//     document.getElementById("result_tip").value = total;



// }

// document.getElementById("tip_calculate").onclick = function () {
//     tip_calcFunction();

// };

