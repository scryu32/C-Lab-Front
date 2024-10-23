import "@/app/project.css"
import Collatzform from "./getCollatz"

export default function FibonacciPage(){
    return(
        <div>
            <div className="title-box">
                <h4>콜라츠 추측</h4>
            </div>
            <div className="content-box">
                <h4>제작 동기</h4>
                <p><span>콜라츠 추측</span>은 이해하기 쉽지만 풀기 어려운 문제중 가장 유명한 문제중 하나로, 어릴때 부터 관심있던 수학 문제면서 복잡한 계산식을 요구하기 때문에 제작하게 되었습니다.</p>
                <h4>배운 내용</h4>
                <p><span>콜라츠 추측</span>에서는 숫자가 예상치 못하게 갑자기 커질수 있기 때문에, 그 수를 초과하면 강제로 프로그램을 종료시켜 서버가 멈추는 일을 막을 수 있었습니다.</p>
                <h4>한계점</h4>
                <p>다양한 수학 문제들과 마찬가지로 64비트 정수값을 넘는 수가 나오면 계산하지 못하는 한계점이 존재합니다.</p>
                <h4>활용</h4>
                <p><span>콜라츠 추측</span>은 미해결 난제로, 활용되는 분야가 있는것이 아닌 문제를 풀기 위해 도전하는 문제입니다.</p>
                <Collatzform/>
                <div className="footer-box"></div>
            </div>
        </div>
    )
}