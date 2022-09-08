/////////////////////////////////////////////
////////////Task To Convert/////////////////
////////////From string words///////////////
////////////To Number///////////////////////
////////////////////////////////////////////


var numer = {
    "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
    "ten":10, 
    "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
    "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, 
    "thirty":30, "forty":40, "fifty":50, 
    "sixty":60, "seventy":70, "eighty":80, "ninety":90
  };
  
  var bigNumer = { "hundred":100,
   "thousand":1000, 
   "million": 1000000 };
  
  
  function parseInt(string) {
  string = string.toLowerCase()
   return string.split(/ |-/)
   .reduce(function(result,index){
    if(numer[index])
      result += numer[index];
    console.log(result)
    if(bigNumer[index])
      result += bigNumer[index] * (result % bigNumer[index]) - (result % bigNumer[index])
    console.log()
    return result;
  },0)
  }