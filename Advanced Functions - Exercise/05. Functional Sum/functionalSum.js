function add(startNum){
   let sum = 0;

   function inner(nextNum){
        sum += nextNum;
        console.log(sum);
    return inner;
   }
   inner.toString = () => {
       return sum;
   }
   return inner(startNum);

}

//add(1);
add(1)(6)(-3);