# position 

## position 속성은 무엇인가?

- CSS `positon` 속성은 HTML 문서상에서 요소가 배치되는 방식을 결정하는 속성이다.
- 요소의 정확한 위치 지정을 위해 `top, right, bottom, left` 속성과 함께 사용한다.

## position 속성 값

### static 
- `position` 속성을 별도로 지정해주지 않으면 적용되는 기본값으로 원래 있어야 할 자리에 배치된다. 

### relative
- 요소 자신을 기준으로 배치된다. 원래 있던 위치를 기준으로 `top, right, bottom, left` 속성을 이용해 원하는 위치에 배치할 수 있다. 

### absolute 
- '위치 상 부모요소' 를 기준으로 배치한다. `positon:relative` 를 가진 가장 가까운 '구조 상 부모요소' 를 위치 상 부모로 지정한다. 
- `top, right, bottom , left` 속성을 이용해 배치할 수 있다.

### fixed
- viewport(브라우저 화면)를 기준으로 배치하며 마찬가지로 `top, right, bottom , left` 속성을 이용해 배치할 수 있다.

---

## Stack order(요소 쌓임 순서)
- 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지 ) 결정.

### 조건
1) 요소에 `position` 속성의 값이 있는 경우 위에 쌓인다.(기본값 static 제외)

2) 1번 조건이 같은경우 `z-index` 속성의 숫자값이 높을수록 위에 쌓인다.

3) 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일 수록 위에 쌓인다.

```html
index.html

<body>
    <div class="wrap">
        <div class="container">
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
    </div>
</body>
```
```css
main.css

.container .item{
    width:100px;
    height:100px;
    border:4px dashed red;
    background-color: orange;
}
.container .item:nth-child(1){
    position:relative;
    
}

.container .item:nth-child(2){ 
    position:absolute;
    top:50px;
    left:50px;
}

.container .item:nth-child(3){
  
}
```

![stackorder](https://user-images.githubusercontent.com/87058243/164225263-7630ddf5-7e88-415a-8e97-5d557dae5524.png)

- `.item:nth-child(1)` 과 `.item:nth-child(2)` 둘 다 `positon` 속성이 지정 되어 있지만 `.item:nth-child(2)` 가 더 다음 구조이므로 더 위에 쌓인다.

<br>

### z-index 속성 추가

```css
.container .item:nth-child(1){
    position:relative;
    z-index:1;
}

.container .item:nth-child(2){
    position:absolute;
    top:50px;
    left:50px;
}

.container .item:nth-child(3){
   z-index:2;
}
```

![stackorder](https://user-images.githubusercontent.com/87058243/164227050-a6191c9b-9596-4077-914f-f6a4c87aa956.png)

- `.item:nth-child(1)` 에 `z-index` 속성을 추가하면 `.item:nth-child(2)` 보다 더 위에 쌓인다. 
- `.item:nth-child(3)` 은 `positiion` 속성이 지정되어 있지 않기 때문에 `z-index` 값이 더 높은 숫자 여도 반영되지 않는다.