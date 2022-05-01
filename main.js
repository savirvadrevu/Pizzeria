NOS_array = [];
function submit()
{
    var S1=document.getElementById("N1").value;
    var S2=document.getElementById("N2").value;
    var S3=document.getElementById("N3").value;
    var S4=document.getElementById("N4").value;
    var S5=document.getElementById("N5").value;
    NOS_array.push(S1);
    NOS_array.push(S2);
 NOS_array.push(S3);
 NOS_array.push(S4);
 NOS_array.push(S5);
 document.getElementById("Dplynme").innerHTML=NOS_array;
 document.getElementById("Submit").style.display="none";
 document.getElementById("Sort").style.display="inline-block";
}
function sort ()
{
NOS_array.sort();   
document.getElementById("Dplynme").innerHTML=NOS_array; 
}