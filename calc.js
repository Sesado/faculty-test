function useFact() 
{
  var input = document.getElementById("typeNumber").value;
  var factorial = fact(input) ;
  var result = "The Factorial Of " + input + " Is " + factorial;
  document.getElementById("result").innerHTML  = result ;
 } 
function fact(i) 
{
  if(i == 0)
    return 1;
  else
    return fact(i-1)*i;
 } 