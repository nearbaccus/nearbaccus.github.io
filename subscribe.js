function testt()
{
var isFormValid = true;

$(".sub input").each(function(){
    if ($.trim($(this).val()).length < 1){
        $(this).addClass("highlight");
        isFormValid = false;
    }
    else{
        $(this).removeClass("highlight");
     }
    });

    if(isFormValid){
       alert("Subscribed!");}

    if (!isFormValid) {
    alert("Please fill in all fields");
}

}
 
