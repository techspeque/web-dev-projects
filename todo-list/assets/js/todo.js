// check off specific todo by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


// click on x to del todo
$("ul").on("click", "span", function(event){

    // prevent event bubbling
    event.stopPropagation();

    //remove the completed todo
    $(this).parent().fadeOut(500, function(){
        // wait for fade out to finish, add a callaback
        $(this).remove();
    });
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let todoText = $(this).val();
        $(this).val("");
        if(todoText){
            $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText+ "</li>");
        }
    }
});


$(".fa-plus").click(function () {
    $("input-type['text']").fadeToggle();
})