  /*  버블정렬
    버블 정렬 (Bubble sort) - 오름차순 기준
    버블 정렬 알고리즘은 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘이다
    
    버블 정렬의 시간 복잡도
    버블 정렬의 시간 복잡도를 계산하면 best, worst, average case 모두 O(n^2)의 시간복잡도를 갖는다.
    (처음 n, 그 다음 n-1, 그 다음 n-2 ...... 2, 1 = n*n-1*-n-2 .... 2,1 = n(n-1)/2 = O(n^2))
    이미 정렬이 되어 있든 안되어 있든 n개의 input이 있을 때 n개의 대해서 각각 n번, 즉 for문을 2번 돌기 때문에 (교환이 일어나지 않더라도 비교는 계속 진행하기 때문에) 최상, 최악, 평균의 경우 모두 O(n^2)의 시간복잡도를 갖게 된다.

  */
        let arr = [14, 11, 7, 6, 1, 9];

        // 1회 사이클 : 5번 비교해서 14는 맨뒤로 보내지고 나머지 5개 자료를 비교
        // 2회 사이클 : 4번 비교해서 11이 맨뒤로 보내지고 나머지 4개 자료를 비교
        // 3 : 3번 7 3
        // 4 : 2번 6 2
        // 5 : 1번 7 1만 남음 (비교 끝)

        //  반복 할때마다 전체 자료를 가지고 (자료갯수 - 1)회 비교 (1사이클) -> 최대값이 맨 뒤로 보내짐 ->  맨 뒤의 자료는 i가 0일때를 제외하고 정렬완료 ,  제외하고 나머지 자료 다시 비교 
        function bubbleSort(arr) {
            for (let i = 0; i < arr.length - 1; i++) { //배열 내의 데이터 탐색
                for (let j = 0; j < arr.length - 1 - i; j++) { // 1사이클 돌때마다 정렬된 자료 제외해서 비교할 자료 갯수가 줄어들기 때문에  - i 
                    if (arr[j] > arr[j + 1]) { //앞에있는 자료가 뒤에있는 자료보다 크면
                        let temp = arr[j]; //temp 변수 만들어서 앞에있는 자료 넣어두고
                        arr[j] = arr[j + 1]; // 앞에있던 자료 자리에 뒤에있던 자료 넣어주고
                        arr[j + 1] = temp; // temp에 있던 자료를 뒷자리로
                    }
                }
            }
        }

        bubbleSort(arr)
        console.log(arr);

       
      



       