function tip_calcFunction() {
        var sum = $("#sum").val();
        var percent = $("#percent").val();
        var numberP = $("#numberP").val();
        sum = parseInt(sum, 10);
    
        var total = (sum * percent / 100) / numberP; 
    
        total = Math.round(total * 100) / 100;
        
        total = total.toFixed(2);
        total = parseFloat(total, 10);
    
        var bill = sum + numberP*total;
        $("#result_sum").val(bill);
        $("#result_tip").val(total);
    
        
    
    }
    
    $("#tip_calculate").click(function () {
        tip_calcFunction();
    
    });
    

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

