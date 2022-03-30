// eslint - disable;
import React, { useState } from "react";
import "./App.css";

function App() {
  // [state, state변경함수] = useState(초기값)
  // useState 변수 처럼 사용하는 데이터 저장공간, 새로고침 없이도 자동 렌더링된다(변수와 다른점)
  // state, state 상태 변경함수로 값을 변경해야한다.
  let [blogName, setBlogName] = useState([
    "코딩학원 추천",
    "온라인 코딩 강의 추천",
    "개발 블로그 추천",
  ]);
  let [up, setUp] = useState(0);
  function blogNames() {
    // state값 원본을 그대로 쓰지않고, 깊은 복사를 해서 값을 변경해야한다.
    let newArray = [...blogName];
    // 버튼을 누르면 글자 순으로 변경해보기
    setBlogName(newArray.sort());
  }
  return (
    <div>
      <div className="black-nav">
        <div>블로그</div>
      </div>
      <div className="list">
        <h3>
          {blogName[0]}
          <span
            onClick={() => {
              setUp(up + 1);
            }}
          >
            👍
          </span>
          {up}
        </h3>
        <p>3월 02일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {blogName[1]} </h3>
        <p>3월 12일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {blogName[2]} </h3>
        <p>3월 22일 발행</p>
        <hr />
      </div>
      <button onClick={blogNames}>버튼</button>
    </div>
  );
}

export default App;
