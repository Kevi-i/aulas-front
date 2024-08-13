$(document).ready(function()
{

    $("h1").css("color", "red");

    $(".bt-add").click(function()
    {
        var cidade = $("#cidade").val();
        var lista = $("#lista").html();
        
        // add somente se o valor não for vazio
        if (cidade != "")
        {

            if (lista.search(cidade) == -1)
            {
                $("#lista").append("<li>"+ cidade + "</li>");
                $("#cidade").val("");
            }

        }


    });

});

