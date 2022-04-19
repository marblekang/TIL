 /*  선택정렬 - 최솟값 탐색
        정렬되지 않은 값 중 최솟값을 맨 앞으로 보낸다. 
        
        시간복잡도
        첫 회전에서의 비교횟수 : 1 ~ n-1 => n-1 
        두번째 회전에서의 비교횟수 : 2 ~ n-1 => n-2
        (n-1) + (n-2) + .... + 2 + 1 => n(n-1)/2
        O(n^2)  */





        // 자료의 갯수가 n 일때 for문 반복횟수는 n-1(1사이클) , 이중for문 반복횟수는 1사이클 마다 자료갯수 -1 
        // 첫번째 사이클 에서는 자료갯수 - 1 , 두번째 사이클 에서는 (자료갯수 - 1) - 1 
        let arr2 = [96, 20, 18, 16, 15];
        //1회 사이클 5개 자료를 4번비교 , 0이 맨앞으로 보내지고 나머지 4개 비교 
        //2회 사이클


        function selectionSort(arr) {
            for (let i = 0; i < arr.length - 1; i++) { // 1사이클을 자료의 갯수 -1번 만큼 반복함. 마지막 남은 자료는 비교할 대상 없이 맨 뒤에 정렬
                let minIndex = i; // 배열의 첫번재 자료가 최소값일 수도 있으니 , 최소값이 맞으면 if문이 돌지 않음.
                for (let j = i + 1; j < arr.length; j++) { // 1사이클 돌때마다 앞에있는 수와 뒤에있는 수를 비교해야해서 
                    if (arr[j] < arr[i]) { // 
                        minIndex = j; // 앞에 있는 자료보다 뒤에있는 자료가 더 작으면 그 자료의 index 값을 minIndex 변수에 담음.
                    }
                    let temp = arr[i]; //  원래 맨 앞의 값을 temp 에 넣고
                    arr[i] = arr[minIndex]; // 최소값을 맨 앞으로
                    arr[minIndex] = temp; // 원래 맨 앞에 있던 값(temp)은 최소값이 있던 자리에 
                }
            }
        }

        selectionSort(arr2);
        console.log(arr2);
