 function javab(){
 var x = document.getElementById("oper").value;
 if(x == "+"){
  var a = parseFloat (document.getElementById("put1").value) + parseFloat( document.getElementById("put2").value) ;
  document.getElementById("javab").innerHTML = parseFloat(`${a}`); 
 }
}
function javab(){
    var x = document.getElementById("oper").value;
    if(x == "-"){
     var a = parseFloat (document.getElementById("put1").value) - parseFloat( document.getElementById("put2").value) ;
     document.getElementById("javab").innerHTML = parseFloat(`${a}`); 
    }
   }
   function javab(){
    var x = document.getElementById("oper").value;
    if(x == "/"){
     var a = parseFloat (document.getElementById("put1").value) / parseFloat( document.getElementById("put2").value) ;
     document.getElementById("javab").innerHTML = parseFloat(`${a}`); 
    }
   }
   function javab(){
    var x = document.getElementById("oper").value;
    if(x == "*"){
     var a = parseFloat (document.getElementById("put1").value) * parseFloat( document.getElementById("put2").value) ;
     document.getElementById("javab").innerHTML = parseFloat(`${a}`); 
    }
   }
