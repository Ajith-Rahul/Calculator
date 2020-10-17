console.log('hello world')
$(document).ready(function(){
    console.log('d ready')
    $('#calculateBtn').click(function(){
        var number1=parseInt($('#number1').val())
        var number2=parseInt($('#number2').val())
        var results=number1+number2;
        $('#result').val(results)
        console.log('gf',results)
       
    })
})