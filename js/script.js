$(".txtAdd").on("keyup",function(e){
        //13  serve para o enter valer como enviar
        if(e.keyCode == 13 && $(".txtAdd").val() != ""){
            var tarefa = $("<div class='tarefas'></div>").text($(".txtAdd").val());
            var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p = $(this).parent();
                p.fadeOut(function(){
                    p.remove;
                });
            });
            var check = $("<i class='fas fa-check'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".completas").append(p);
                    p.fadeIn();
                });
                
                $(this).remove();
            });
            
             tarefa.append(del,check);

            $(".naocomp").append(tarefa); 
            //paralimpar o input
            $(".txtAdd").val("");
            
        }
            
        
        
      });

/*Outro codigo realizado(diferente html e css)

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
        var deleta = $("<button class='rem'>X</button>").click(function(){
            console.log("testeApagar");
            $(this).parent().remove();
        });
        var done = $("<button class='feito'>Check</button>").click(function(){
            console.log("testeReset")
                $(this).parent().remove();
                $('#realizadas').append(newList);
                showResete();
        });;
       
        if(conteudo !== ''){
            $(elemento).append(deleta,done);
            //$(elemento).append();
            $('.myList').append(elemento);
            $("#todotxt").val("");
            showResete();
        }
            
            $('#resetar').on("click", function(){
                $('.myList').empty();
                $('#realizadas').empty();
                showResete();
            });
    });
//fim
});

*/





