      function solution(x) {
        let arr = [];
        let sum = 0;
        arr = x.toString().split("");
        for (let i = 0; i < arr.length; i++) {
          sum += parseInt(arr[i]);
        }
        const answer = x % sum == 0 ? true : false;
        return answer;
      }