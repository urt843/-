
    var result = document.getElementById("result");
    function edit(elem) {
      result.value = result.value + elem.value;
    }
    function calc() {
      if(is_ope_last())  result.value = result.value.slice(0, -1);

  var temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;}
    function is_ope_last(){
      return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
    }
  }
   function c_click(){
    result.value="";
    is_calc=false;
   }