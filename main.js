nameofstudentarray=[];
function submit(){
    var displaystudent=[];
    for (var j=1;j<=4;j++){
        var nameofstudent=document.getElementById("name_of_the_student_"+j).value;
        console.log(nameofstudent);
        nameofstudentarray.push(nameofstudent);

    }
    console.log(nameofstudentarray);
    var lengthofarray=nameofstudentarray.length;
    console.log(lengthofarray);

    for (var k=0;k<=lengthofarray;k++)
    {
displaystudent.push("name-" +nameofstudentarray[k]);
console.log(displaystudent);
    }
    console.log(displaystudent);
    document.getElementById("display_name_with_commas").innerHTML=displaystudent;
    var remove_commas=displaystudent.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}                                 

function sorting()
{
nameofstudentarray.sort();
console.log(nameofstudentarray);
var displaynamesorting=[];
var lengthofarray=nameofstudentarray.length;
console.log(lengthofarray);
for (var k=0;k<=lengthofarray;k++)
{
displaynamesorting.push("name-" +nameofstudentarray[k]);
console.log(displaynamesorting);
}
var remove_commas=displaynamesorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
