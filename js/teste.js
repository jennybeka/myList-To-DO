function showResete(){ //function para mostrar o button de resetar
    list = $('li').length;
    if(list > 0) {
        $('#resetar').show();
    } else 
        $('#resetar').hide();
}
$(document).ready(function(){
    showResete();
    $('#add').on("click", function() {
        var conteudo = $("#todotxt").val();
        var elemento = $("<li></li>").text(conteudo);
        var newList = $("<li></li>").text(conteudo);
        var deleta = $("<button class='rem'>X</button>");
        var done = $("<button class='feito'>Check</button>");
       
        if(conteudo !== ''){
            $(elemento).append(deleta,done);
            //$(elemento).append();
            $('.myList').append(elemento);
            $("#todotxt").val("");
            showResete();
        }
            $('.rem').on("click", function(){
                console.log("testeApagar");
                $(this).parent().remove();
            });
        
         
            $('.feito').on("click", function(){
                console.log("testeReset")
                $(this).parent().remove();
                $('#realizadas').append(newList);
                showResete();

            });

            $('#resetar').on("click", function(){
                $('.myList').empty();
                $('#realizadas').empty();
                showResete();
            });
    });
//fim
});






