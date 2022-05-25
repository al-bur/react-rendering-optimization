## bailout-test

이 branch에서는 react 재조정에 대한 bailout test를 진행하였습니다.

리액트에서 Render Phase 단계에서 이전 virtual DOM과 현재 virtual DOM 끼리의 재조정 단계가 진행되는데, 어떤 것들이 달라야 Real DOM에 주입이 되는지 실험해보았습니다.

### 왜 이 실험을 하게 되었는지?

- 부모가 렌더링이 되면 자식들은 당연히 리렌더링이 된다. 아래는 이에 대한 설명이다.

  > This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

- 그렇게 되면, 자식들은 재조정 단계에서 이전과 다른게 없어도 commit이 되어버리는 것인가?
- 아니면, 재조정 단계에서 몇 개의 검사를 통과하고 나서 commit이 되지 않는 것인가?
