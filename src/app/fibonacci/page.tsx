import "@/app/project.css"
import FibonacciForm from "./getFibonacci"

export default function FibonacciPage(){
    return(
        <div>
            <div className="title-box">
                <h4>피보나치 수열</h4>
            </div>
            <div className="content-box">
                <h4>제작 동기</h4>
                <p><span>피보나치 수열</span>은 제가 프로젝트를 시작하면서 처음 만든 작품입니다. 피보나치 수열을 처음 접한건 <span>코드업</span>에서 문제를 풀때 피보나치 수열을 구하고 그 수열을 이용해 푸는 문제가 나왔습니다. 그 문제를 풀기위해 피보나치 수열을 찾아보던중, 흥미를 느끼게 되어 제작하게되었습니다.</p>
                <h4>배운 내용</h4>
                <p>피보나치 수열을 배우면서 <span>재귀함수의 단점</span>에 대해 알게되었습니다. 보통 피보나치 수열을 만들때 재귀함수를 이용해서 만들게 되지만, 함수가 너무 깊게 호출될 경우 <span>스택 오버플로우</span> 문제가 발생하고, 메모리 사용량이 많아 성능적으로 단점이 생길수 있다는것을 알게되었습니다. 따라서 저는 <span>재귀함수 대신 for문을 사용</span>해서 피보나치 수열을 구했고, 그 결과 <span>시간복잡도</span> 면에서 훨씬 성능이 우수하고 더 높은 수를 가져올수 있도록 코드를 작성하였습니다.</p>
                <h4>한계점</h4>
                <p>피보나치 수열은 그 값이 점점 큰폭으로 상승하기 때문에 32비트 정수 최댓값인 2,147,483,647을 쉽게 넘기고, 이를 보완하기위해 <span>long long</span>을 사용하여 64비트 정수값까지 늘렸지만 93을 넘어가는 숫자는 구할수 없었습니다.</p>
                <h4>활용</h4>
                <p><span>피보나치 수열</span>은 <span>피보나치 나선</span>, <span>계단을 오르는 경우의 수</span>등의 계산에서 활용됩니다.</p>
                <FibonacciForm/>
                <div className="footer-box"></div>
            </div>
        </div>
    )
}