module.exports = function reverse (n) {
  n = Math.abs(n)
  if(n > 9){
      n = n.toString().split("").reverse().join("");
      return n;
  }
  else{
    return n;
  }
}
