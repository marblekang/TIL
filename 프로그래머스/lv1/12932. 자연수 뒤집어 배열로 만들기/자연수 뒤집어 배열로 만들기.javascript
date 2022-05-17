function solution(num) {
    if(num > 10000000000){
      return null;
    }else{
       let arr = num.toString().split(''); 
      let reverse = [];
      for (let i = arr.length - 1; i >= 0; i--) { // index값 맞추기위해 .length-1 , for 문 돌때마다 i는 1씩 작아짐(i가 0 이상일때까지) 
         reverse.push(arr[i]*1); // 데이터 하나씩 배열에 추가해줌. 문자데이터를 숫자로 바꾸기 위해 *1
        }
        return reverse; //반환
    }
     
    
     
}