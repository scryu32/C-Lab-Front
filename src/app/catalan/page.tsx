import "@/app/project.css"
import CatalanForm from "./getCatalan"

export default function FibonacciPage(){
    return(
        <div>
            <div className="title-box">
                <h4>카탈란 수</h4>
            </div>
            <div className="content-box">
                <h4>제작 동기</h4>
                <p><span>카탈란 수</span>는 제가 두번째로 만든 프로젝트로, 피보나치 수열처럼 <span>코드업</span>에서 문제를 풀다가 관련된 문제가 나와서 알게 되어 제작하였습니다.</p>
                <h4>배운 내용</h4>
                <p>카탈란 수 코드를 짤때 식에서 <span>팩토리얼</span>을 사용하게 되는데, 이때 수가 너무 커져서 long long을 사용해도 감당을 하지 못해 식에서 팩토리얼을 제거하고, 단순하게 식을 사용해 풀도록 하였습니다. 그 결과 기존에는 12까지 가능하던 계산이 34까지 계산이 가능하도록 늘릴수 있었습니다.</p>
                <h4>한계점</h4>
                <p>어느정도 높은 수를 해결할수 있도록 하였지만 피보나치 수열과 마찬가지로 높은 수를 계산할수 없다는 한계점이 있었습니다.</p>
                <h4>활용</h4>
                <p><span>카탈란 수</span>는 다양한 <span>조합론</span>에서 사용됩니다. 대표적인 예시로 <span>이진 검색 트리를 구성하는 방법의 수</span>, <span>n쌍의 괄호로 만들 수 있는 올바른 괄호의 수</span>, <span>한 다각형을 교차하지 않는 삼각형들로 나누는 경우의 수</span>등을 구할때 사용됩니다. </p>
                <CatalanForm/>
                <div className="footer-box"></div>
            </div>
        </div>
    )
}