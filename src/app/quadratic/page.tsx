import "@/app/project.css"
import QuadraticForm from "./getQuadratic"

export default function QuadraticiPage(){
    return(
        <div>
            <div className="title-box">
                <h4>이차방정식</h4>
            </div>
            <div className="content-box">
                <h4>제작 동기</h4>
                <p><span>이차방정식</span>의 해를 구하는 문제는 제가 <span>새로운 프로그래밍 언어</span>를 배울때 한번씩 만들어보는 프로그램인데, 이번 기회를 통해 C언어로 이차방정식의 해를 구하는 프로그램을 제작해보고 싶어 만들게 되었습니다.</p>
                <h4>배운 내용</h4>
                <p>이차방정식의 해 중 <span>허근</span>이 나올 수 있기 때문에 C언어에서 문자열로 리턴하도록 설정했고, 이때 문자열로 받는 과정에서 글자가 깨지지 않도록 UTF-8 형식으로 <span>디코딩</span> 해야한다는것을 알게 되었습니다. </p>
                <h4>한계점</h4>
                <p>이 프로그램은 <span>단순한 계산</span>을 하기 때문에 api요청을 통해 전송하는것보다 <span>클라이언트</span>에서 직접 계산하는것이 빠를수도 있습니다.</p>
                <h4>활용</h4>
                <p>이차방정식은 <span>중학교 수학과정</span>에서 배우는 내용으로, 후에 <span>이차함수</span> 등 다양한 수학의 기초가 되는것이기 때문에 다양한 분야에서 활용됩니다.</p>
                <QuadraticForm/>
                <div className="footer-box"></div>
            </div>
        </div>
    )
}