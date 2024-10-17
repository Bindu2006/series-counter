var x=0;
var outs=document.getElementById("out").innerText
document.getElementById('number').innerText=x;
function increament(){
 x++;
 document.getElementById('number').innerText=x;
}
function save(){
    outs += x+" - ";
    console.log(outs)
    document.getElementById("out").innerText=outs;
    x=0;
    document.getElementById('number').innerText=x;
    }