import "./navbar.css"

export default function NavBar(){
    return (
        <div>
            <nav className="navbar">
                <a href="/" className="navbar-title">C-Lab</a>
                <a href="#motive" className="navbar-element">동기</a>
                <a href="#idea" className="navbar-element">아이디어</a>
                <a href="#skill" className="navbar-element">기술</a>
                <a href="#work" className="navbar-element">결과물</a>
            </nav> 
        </div>
    )
}