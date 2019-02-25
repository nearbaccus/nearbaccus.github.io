function searchFunction() {
    var input = document.getElementById('input');
    var correctCase = input.value.toUpperCase();
    var recipes = document.getElementsByTagName('h4');

//gets all recipes and checks if each one matches input
    for(i=0 ; i< recipes.length; i++){
        a = recipes[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(correctCase) >= 0){
            recipes[i].style.display = "block";
        }

        else{
            recipes[i].style.display = 'none';
        }
    }
}
