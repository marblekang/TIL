# LifeCycle Hook

## LifeCycle

- 리액트 컴포넌트에는 Lifecycle , 즉 컴포넌트의 생명 주기가 존재한다. 컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이 난다.
- 이러한 컴포넌트의 생명주기 사이에 `LifeCycle Hook` 을 걸 수 있다. Hook을 사용하면 컴포넌트가 등장 할때, 컴포넌트가 사라지기 전에 , 컴포넌트가 업데이트 되었을때 등의 상황에 원하는 동작을 실행하게 할 수 있다.

<hr>

## Lifecycle Hook의 형태와 종류

- Lifecycle Hook 은 class형 컴포넌트 에서 사용 가능하다.

```javascript
class Detail extends React.Component {
  componentDidMount() {
    //Detail 컴포넌트가 Mount 되고나서 실행할 코드
  }
  componentWillUnmount() {
    //Detail 컴포넌트가 Unmount 되기전에 실행할 코드
  }
}
```

### Mount ( 생성 )

- 컴포넌트의 인스턴스가 생성되어, DOM에 삽입될 때 순서대로 호출된다.

#### `constructor()` :

- 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
  this.props, this.state에 접근할 수 있으며 리액트 요소를 반환한다.
- setState를 사용할 수 없으며 DOM에 접근해선 안된다.

#### `getDerivedStateFromProps()` :

- props에 있는 값을 state에 동기화 시킬 때 사용하는 메서드

#### `render()` :

- UI를 렌더링하는 메서드

#### `componentDidMount()` :

- 컴포넌트가 웹 브라우저 상에 나타난 후 즉 첫 렌더링을 마친 후에 호출하는 메서드
- 라이브러리나 프레임워크의 함수를 호출하거나 이벤트 등록, `setTimeout`, `setInterval`과 같은 비동기 작업을 처리하면 되고, `setState` 호출도 이 메서드에서 호출하는 경우가 많다.

---

### Update (변경)

- props나 state가 변경되면 렌더가 진행되며 순서대로 호출된다.

#### `getDerivedStateFromProps()` :

- 이 메서드는 마운트 과정에서 호출되며, 업데이트가 시작하기 전에도 호출된다.
- props의 변화에 따라 state 값에도 변화를 주고 싶은 경우에 사용한다.

#### `shouldComponentUpdate()` :

- props또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
- true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고,
  false를 반환하면 작업을 중지한다.

#### `render()` :

- 컴포넌트 리렌더링

#### `getSnapshotBeforeUpdate()` :

- 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드

#### `componentDidUpdate()` :

- 컴포넌트 업데이트 작업이 끝난 후 호출하는 메서드.

---

### Unmount ( 마운트 해제 )

- 컴포넌트를 DOM에서 제거하는 과정-

#### `componentWillUnmount()` :

- 컴포넌트를 DOM에서 제거할 때 실행한다.
  이후에 컴포넌트는 다시 렌더링 되지 않으므로, 여기에서 `setState()`를 호출하면 안된다.
