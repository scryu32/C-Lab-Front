import "./mainPage.css"
import DetailCards from "./detailCards";

export default function MainPage(){
  return (
    <div>
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
      <div id="skill" className="skill-container">
        <h4>C-Lab에 사용된 <span>기술</span></h4>
        <div className="cards-container">
          <div className="back-end-container">
            <h4>BackEnd Skill</h4>
            <div className="card-container">
              <div className="card">
                <h4>C언어</h4>
                <p>프로젝트 이름이 C-Lab인 만큼, <span>C언어</span>를 사용한 코드로 대부분 개발하였습니다. C언어를 사용한 이유는 위에서 서술했듯이, <span>가장 빠른 속도</span>때문입니다. 파이썬은 <span>인터프리터 언어</span>로, 코드를 한줄 한줄 읽어 실행시키는 반면에, C언어는 <span>컴파일러 언어로</span>, 컴파일된 코드를 실행하기 때문에 <span>반복적이고 복잡한 계산</span>을 할수록 C언어가 유리하다는것을 알수있습니다.</p>
              </div>
              <div className="card">
                <h4>FastAPI</h4>
              <p><span>FastAPI</span>는 Go언어의 4배, Django의 2배 빠른 속도를 가진 <span>파이썬의 웹 프레임워크</span>로, 이 프로젝트의 <span>백엔드 프레임워크</span>로 사용하였습니다. C언어로 작성한 코드를 FastAPI에 요청이 들어오면 실행시키는 방법으로 웹사이트가 작동하고, 이 방법에서 간단한 코드는 파이썬의 계산이 유리할수있기 때문에 소인수분해같이 <span>복잡한 계산</span>을 프로젝트에 사용했습니다.</p>
              </div>
            </div>
          </div>
          <div className="front-end-container">
            <h4>FrontEnd Skill</h4>
            <div className="card-container">
              <div className="card">
                <h4>Next.js</h4>
                <p><span>Next.js</span>는 웹 <span>프론트엔드 프레임워크</span>로, <span>CSR</span>(Client Side Rendering)과 <span>SSR</span>(Server Side Rendering)을 동시에 지원하며 React 문법을 사용하기 때문에 많은 사람들이 애용하는 프레임워크입니다. 기존의 React나 Vue같은 프레임워크는 CSR을 사용해 웹사이트를 만들지만, CSR은 <span>속도</span>나 <span>검색엔진 최적화</span> 등의 단점이 있기 때문에 SSR을 사용해서 보다 빠른 속도로 서버가 작동하도록 설계하였습니다.</p>
              </div>
              <div className="card">
                <h4>TypeScript</h4>
                <p><span>TypeScript</span>는 자바스크립트에서 불가능한 <span>타입 지정</span>을 해주는 언어로, 타입스크립트를 사용하지 않으면 유지 및 보수에 어려움을 겪을 수 있고, 예상하지 못하나 응답이 돌아오거나 요청이 들어가는것을 막지 못하는 문제가 있기 때문에 타입스크립트는 거의 필수적으로 사용해야 하는 언어중 하나입니다.</p>
              </div>
            </div>
          </div>
        </div>
        <DetailCards/>
      </div>
      <div id="work" className="work-container">
        <h4>작업물</h4>
        <p>제가 프로젝트를 위해 만든 작업물들입니다. 각각 작업물들을 <span>왜 만들었는지</span>, <span>어떤 기술</span>을 이용해 만들었는지 자세히 적었습니다.</p>
        <ul>
          <li><a href="/fibonacci">피보나치 수열</a></li>
          <li><a href="/catalan">카탈란 수</a></li>
          <li><a href="/quadratic">이차방정식</a></li>
          <li><a href="/collatz">콜라츠 추측</a></li>
          <li><a href="/prime">소인수 분해</a></li>
          <li><a href="/genshin">*원신 가챠 시뮬레이터</a></li>
        </ul>
      </div>
    </div>
  )
}