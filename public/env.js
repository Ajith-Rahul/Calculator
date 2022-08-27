
$(document).ready(function(){
    $('#calculateBtn').click(function(){
        var number1=parseInt($('#number1').val())
        var number2=parseInt($('#number2').val())
        var results=number1+number2;
        $('#result').val(results)
       
    })
})
