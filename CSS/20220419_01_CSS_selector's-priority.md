# CSS 선택자 우선순위 ✏️
![priority](https://groupe-sii.github.io/cheat-sheets/assets/images/css-selectors-specificity.png)

<br>

## 우선순위란 무엇인가?
- 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 css 속성을 우선 적용할지 결정하는 방법이다.
- 점수가 높은 선언이 우선한다.
- 점수가 같으면, 가장 마지막에 해석된 선언이 우선한다.

<br>

## 선택자 별 점수(명시도)
`important` : 9999999999(무한대) 점 - 가장 우선으로 선언.

`inline 선언` : 1000점.

`ID 선택자` : 100점.

`Class 선택자`: 10점. (가상클래스 선택자(:)도 포함된다.) 

`부정 선택자(not())` : 10점. (부정 선택자 내에는 어떤 선택자가 있어도 부정 하기 때문에 점수계산에 포함 하지않는다.)

`태그 선택자` , `가상요소선택자(::)`: 1점. 

`전체 선택자(*)`:0점.

`상속`: 점수를 별도로 계산하지 않음.

> inline 선언과 !important 는 사용을 권장하지 않음.

---

<br>

```html
index.html
<body>
<div id="hello" class="hello">Hello world!</div>
</body>
```


```css
style.css

.hello{ /* 10점 */
    color: red;
}

#hello{ /* 100점  (우선 적용된다.)*/
    color: blue;
}

```

```css
style.css

/* 점수가 같은경우 */

.hello{ /* 10점 */
    color: red;
}

.hello{ /* 10점 - 더 나중에 해석된 선언이 우선 적용 한다. */
    color: green;
}
```