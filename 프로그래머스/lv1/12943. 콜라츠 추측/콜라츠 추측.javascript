function solution(num){
  let answer = 0;
  for(let i = 0; i < 500 ; i++){

      if(num === 1){
      
      return answer = i;
      }else{
          if(num % 2 == 0){
              num = num/2;
          }else{
              num = ((num * 3) + 1);
          }
      }
  }  
  return answer = -1;
  }