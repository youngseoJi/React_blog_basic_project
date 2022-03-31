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
  let [like, setLike] = useState([0, 0, 0]);
  // UI 만드는 법) 1. UI와 관련된 중요 정보들을 state로 저장해놓고
  // 2. state에 따라서 UI가 수정되게 만들면 된다.
  let [modal, setModal] = useState(false);

  // state값 원본을 그대로 쓰지않고, 깊은 복사를 해서 값을 변경해야한다.
  // 버튼을 누르면 글자 순으로 변경해보기
  function blogNames() {
    let newArray = [...blogName];
    setBlogName(newArray.sort());
  }
  return (
    <>
      <div className="black-nav">
        <div>블로그</div>
      </div>
      <button onClick={blogNames}>버튼</button>

      {/* 반복되는 데이터는 map을 사용하여 반복하며, 반복되는 모든 데이터의 개수만큼 반복된다.*/}
      {blogName.map((el, i) => {
        return (
          <div className="list" key={i}>
            <h3>
              {el}
              <span
                onClick={() => {
                  setLike(like);
                }}
              >
                👍
              </span>
              {like[i]}
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
      {modal ? <Modal blogName={blogName} /> : null}
    </>
  );
}

// Modal 컴포넌트에서 정의되지 않은 App컴포넌트 내의 변수를 갖고와서 사용하고 싶으면?
// 부모 컴포넌트 App 데이터를 자식 컴포넌트 Modal 에 갖고와서 사용하는 방법 :  props 문법을 사용하여 데이터를 보낼 수 있다.
// props로 자식에게 state 상태변수 전달 방법
// 1. <자식 컴포넌트 전달받을 변수명={state상태변수}>
// 2. 자식컴포넌트(props) props 변수, 객체를 전달해줘서 사용한다.
// 3. 사용할때 props.변수명 이렇게 작성하여 사용한다. => props.blogName
function Modal(props) {
  return (
    <>
      <div className="modal">
        {/* 각 글의 제목을 누르면 해당하는 창이 뜨게 설정하기 */}
        <h2> 제목 : {props.blogName[0]}</h2>
        <p>까꿍! on 상태입니다!</p>
      </div>
    </>
  );
}
