// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// Click on X to delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// Add new todos
$("input[type='text']").keypress(function(e){
    // on enter key
    if(e.which === 13){
        // saves input
        var todoText = $(this).val();
        // clears input
        $(this).val("");
        // adds var to new li
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$("#addItem").click(function(){
    $("input[type='text']").fadeToggle();
});