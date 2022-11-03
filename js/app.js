
$(function() {
    $("#date1").datepicker({ minDate: 1 });
   $("#date2").datepicker({ minDate: 1 });
   $( "#tooltip" ).tooltip({
    position: {
       my: "left-300 bottom",
       at: "center top-10",
       collision: "none"
    }
})
});

function dateSelect() {
   date1 = new Date($("#date1").val());
   date2 = new Date($("#date2").val());
    let milliSeconds = date1.getTime() - date2.getTime();
     
    let days = Math.round(Math.abs(milliSeconds / (1000 * 3600 * 24)));

        message = document.getElementById("ans");

        if(days >= 5 && days <=10 ){
            text = 'taikoma 5% nuolaida';
            $("#ans").removeClass().addClass("yellow");
        } else if (days >= 11 && days <=20 ){
            text = 'taikoma 10% nuolaida';
            $("#ans").removeClass().addClass("orange");
        } else if (days > 20 ){
            text = 'taikoma 15% nuolaida';
            $("#ans").removeClass().addClass("green");
        } else {
            text = 'nuolaida netaikoma';
            $("#ans").removeClass().addClass("red");
        }
        message.innerHTML = `Paslaugą užsisakant ${days}d. ${text} !`
}

function changeColor(colorParam) {
    let palette = colorParam.value;
    $("#paletteColor").removeClass().addClass(palette)
    if (palette === 'grayPalette'){
        $("#submitBtn").removeClass().addClass("grayBtn")
    }
    else if (palette === 'greenPalette'){
        $("#submitBtn").removeClass().addClass("greenBtn")
    }
    else if (palette === 'bluePalette'){
        $("#submitBtn").removeClass().addClass("blueBtn")
    }
    else {
        $("#submitBtn").removeClass()
    }
};


$(function () {
    $("#chkSubscribe").click(function () {
        if ($(this).is(":checked")) {
            $("#subEmail").show();
          
        } else {
            $("#subEmail").hide(); 
        }
    });
});