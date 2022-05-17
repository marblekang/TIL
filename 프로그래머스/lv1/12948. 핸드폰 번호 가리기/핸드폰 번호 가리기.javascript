function solution (phone_number){
      let answer = "";
      if(phone_number.length >=4 && phone_number.length <= 20 ){
        for(let i = 0 ; i < phone_number.length - 4 ; i++ ){
          answer+="*";
        }
        
        return answer+=phone_number.slice(-4);
      }else{
        return null;
      }
    }