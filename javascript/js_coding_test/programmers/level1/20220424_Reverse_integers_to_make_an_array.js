/* 프로그래머스 코딩테스트 연습문제  

자연수 뒤집어 배열로 만들기 (level1)



자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n	return
12345	[5,4,3,2,1] 

*/

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