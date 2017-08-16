var favFoods = ["Bacon", "Lettuce", "Tomato", "Corn"];

var newFood = prompt("What do you want to replace bacon with?");
//Ask new user for new food and save as newFood
favFoods[0] = newFood;
//Replace index 0 with what the user said
window.alert(favFoods[0] + " "+  favFoods[1] + " "+ favFoods[2] + " "+ favFoods[3]);
//Output all values of the array to the screen