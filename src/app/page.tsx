import NavBar from "./navbar";
import "./mainPage.css"

export default function MainPage(){
  return (
    <div>
      <NavBar/>
      <div className="mainPage-container">
        <h4>Welcome To C-Lab!</h4>
        <p>Made By 유성찬</p>
      </div>
      <div id="motive" className="motive-container">
        <h4>C-Lab을 만들게된 <span>계기</span></h4>
        <p>코딩으로 어떤것을 만들때 항상 <span>속도</span>가 중요하다고 생각했습니다. <br /> 그렇기 때문에 저는 가장 빠른 <span>C언어</span>를 컴파일해두고, 그 파일을 계속 사용하는것이 성능적인 측면에서 가장 효율적이라고 판단했기 때문에 <br /><span>C언어</span>로 코딩한 파일을 파이썬의 프레임워크중 가장 빠른 <span>FastAPI</span>를 사용하여 가장 빠르게 응답을 가져올수 있는 프로젝트를 제작하게 되었습니다.</p>
      </div>
      <div id="idea" className="idea-container">
        <h4>C-Lab 기능의 <span>아이디어</span></h4>
        <p>평소에 재밌는 수학문제나 코딩문제 푸는것을 좋아하는데, 그중 흥미로운 문제들을 찾으면 코드로 짜서 사이트에 넣는 방식으로 작업했습니다. <br />대표적으로 소개하면 <span>피보나치 수열</span>은 코드업에서 문제를 풀다가 발견한 수열이고, <span>콜라츠 추측</span>는 수학계의 난제로, 이해하기 가장 쉽지만 풀수는없는 수로 유명한 문제입니다. <br /> 이처럼 다양한 문제와 수열들을 구하는 프로그램을 작성했습니다. <br /> 또한 개인적으로 흥미있거나 심심해서 짠 코드들도 몇가지 추가해서 넣었습니다.</p>
      </div>
    </div>
  )
}