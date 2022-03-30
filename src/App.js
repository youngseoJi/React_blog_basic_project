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
  let [like, setLike] = useState(0);

  let [modal, setModal] = useState(false);

  function blogNames() {
    // state값 원본을 그대로 쓰지않고, 깊은 복사를 해서 값을 변경해야한다.
    let newArray = [...blogName];
    // 버튼을 누르면 글자 순으로 변경해보기
    setBlogName(newArray.sort());
  }
  return (
    <>
      <div className="black-nav">
        <div>블로그</div>
      </div>
      <button onClick={blogNames}>버튼</button>
      {/* 반복되는 데이터는 map을 사용하여 반복하며, 반복되는 모든 데이터의 개수만큼 반복된다.*/}
      {blogName.map((el) => {
        return (
          <div className="list">
            <h3>
              {el}
              <span
                onClick={() => {
                  setLike(like + 1}}
              >
                👍
              </span>
              {like}
       </h3>
            <p>3월 02일 발행</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        on/off버튼
      </button>
      {modal ? <Modal /> : null}
    </>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>알림창</h2>
        <p>까꿍! on 상태입니다!</p>
      </div>
    </>
  );
}

export default App;
