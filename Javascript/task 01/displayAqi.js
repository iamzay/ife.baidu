function displayAqi(){
    var input=document.getElementById("aqi-input");
    //var old_var =input.getAttribute("value");
    var aqi=input.value;
    //alert(aqi);
    //alert(old_var);
    var display=document.getElementById("aqi-display");
    display.firstChild.nodeValue=aqi;
}
