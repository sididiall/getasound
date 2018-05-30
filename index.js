$(function () {
    let b2b = $('.B2B-section');
    let b2c = $('.B2C-section');

    $("#b2b").click(function () {
        if (b2b.addClass("shown")) {
            b2c.removeClass("shown");
        }
        b2b.addClass("shown");
    });

    $("#b2c").click(function () {
        if (b2c.addClass("shown")) {
            b2b.removeClass("shown");
        }
        b2c.addClass("shown");
    });

    var maxLimit = 123;

    $('input').keyup(function () {
        var lengthCount = this.value.length;
        if (lengthCount > maxLimit) {
            this.value = this.value.substring(-200, maxLimit);
            var charactersLeft = maxLimit - lengthCount + 1;
        } else {
            var charactersLeft = maxLimit - lengthCount;
        }
        $('#characters').text(charactersLeft + ' mots');
        
        if(charactersLeft < 0){
            $('#characters').css("color", "#f44336");
        }else{
            $('#characters').css("color", "#3494e0");
        }
    });


});
