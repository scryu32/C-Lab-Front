import "@/app/project.css"
import PrimeForm from "./getPrime"

export default function FibonacciPage(){
    return(
        <div>
            <div className="title-box">
                <h4>소인수 분해</h4>
            </div>
            <div className="content-box">
                <h4>제작 동기</h4>
                <p>다양한 문제들을 해결하고, 제가 가장 어려울것이라고 생각한것중 하나인 프로그램이였기에 도전해보고자 하는 마음으로 제작하게 되었습니다.</p>
                <h4>배운 내용</h4>
                <p>소인수 분해 프로그램을 제작하면서 <span>포인터</span>와 <span>구조체</span>를 적극적으로 활용했습니다. <span>포인터</span>는 주소를 가르키는 정수값을 저장하는 공간으로, C언어에서 배열을 반환하기 위해서 포인터를 사용해야했습니다. <span>구조체</span>는 타입스크립트의 타입, 자바의 클래스, 파이썬의 모델과 비슷한 개념으로 <span>어떠한 공간에 들어갈 변수의 자료형을 지정하는 것</span>입니다. 이를 이용해 함수가 <span>소인수의 배열과 소인수의 개수</span>를 반환하도록 하였습니다.</p>
                <h4>한계점</h4>
                <p>이번 프로그램은 <span>동적 배열</span>을 사용했는데, 이 과정에서 메모리 누수와 너무 큰 배열이 들어올것을 예상하기 힘드므로 <span>long long</span>형식이 아닌 <span>int</span> 자료형으로 지정하여 32비트 정수값을 넘는 수는 계산하지 못하는 문제가 있습니다.</p>
                <h4>활용</h4>
                <p>소인수 분해는 모든 수학의 기초가 되는 방법으로, 자연수의 <span>제곱근</span>을 구하는 등 거의 모든 수학에 포함되는 공식입니다.</p>
                <PrimeForm/>
                <div className="footer-box"></div>
            </div>
        </div>
    )
}