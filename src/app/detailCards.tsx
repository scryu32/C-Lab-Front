'use client'
import "./mainPage.css"

export default function DetailCards(){
    return (
        <div>
            <div className="detail-container">
                <div className="back-detail-card">
                    <div className="bf-detail">
                        <h4>C언어</h4>
                        <div className="detail-detail">
                            <h4><span>포인터</span></h4>
                            <p><span>포인터</span>는 <span>특정 변수의 주소값을 저장하는 변수</span>로, 프로그램을 세부적으로 관리하거나 메모리에 직접적으로 접근하기 위해서 필요한 문법입니다. 프로젝트에서 <span>배열의 반환값</span>을 포인터로 받으면서 기존에는 불가능한 배열의 반환을 가능하게 해주었습니다.</p>
                        </div>
                        <div className="detail-detail">
                            <h4><span>구조체</span></h4>
                            <p><span>구조체</span>는 반환값이나 변수의 값들의 <span>자료형</span>을 저장하는 형식을 지정하는 방법으로, 후에 관리가 편하고 오류의 발생을 줄일수 있기 때문에 사용했습니다.</p>
                        </div>
                        <div className="detail-detail">
                            <h4><span>동적 메모리</span></h4>
                            <p><span>동적 메모리</span>는 개발자가 직접 관리하는 메모리 공간에 배열을 할당하는것으로, 배열 요소의 갯수를 처음에 지정하는것보다 동적으로 지정하면 더 효율적으로 관리할 수 있기 때문에 이 문법을 사용했습니다. 이 문법은 <span>메모리 누수</span>라는 치명적인 문제가 발생 할 수 있기 때문에 조심히 다뤄야 하는 문법입니다.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="front-detail-card">
                    <div className="bf-detail">
                        <h4>TypeScript</h4>
                        <div className="detail-detail">
                            <h4><span>클래스</span></h4>
                            <p><span>클래스</span>는 타입스크립트의 구조체로, 타입을 지정해 기존의 자바스크립트의 단점을 없애줍니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}