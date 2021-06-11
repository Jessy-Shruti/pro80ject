name_of_the_guest =[];
function submit() {
    var name_1 = document.getElementById("name_of_student_1").value;
    name_of_the_guest.push(name_1);
    console.log(name_of_the_guest);
    document.getElementById("display_name").innerHTML=name_of_the_guest;
    document.getElementById("submit_button").style.display="inline-block";
    document.getElementById("sort_button").style.display="inline-block";
}

function show() {
    console.log(name_of_the_guest);
    document.getElementById("display_name_1").innerHTML = name_of_the_guest;
}

function sort() {
    name_of_the_guest.sort();
    console.log(name_of_the_guest);
    document.getElementById("display_name_2").innerHTML = name_of_the_guest;
} 

function search() 
{
    var s= document.getElementById("search_input").value;
    var found=0;
    var j;
    for (j=0; j<name_of_the_guest.length; j++)
    {
        if (s==name_of_the_guest[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("name found "+found+" time/s")
}