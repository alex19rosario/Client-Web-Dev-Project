function myFunction(){
    var boolValue = confirm("Are you Okay");
    if(boolValue == true){
        document.getElementById("demo").innerHTML="You pressed OK";
    }
    else{
        document.getElementById("demo").innerHTML="You don't pressed OK";
    }
    let demoValue = document.getElementById("demo").innerHTML;
    demoValue +="<br> Hello Carlos";
    window.alert("We are going to welcome Carlos");
    document.getElementById("demo").innerHTML = demoValue;
    document.getElementById("demo").style.color = "red";
}