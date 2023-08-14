// import "./Header.css";
// 메뉴바 만들기
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  return (
    <div className="Header">
      {/* fixed="top"  */}
      <Navbar className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand onClick={()=> navigate('/')}>LOGO</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Nav className="me-auto">
            <NavDropdown title="박물관" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=> navigate('/area')}>지역별</NavDropdown.Item>
              {/* <NavDropdown.Item href="/subject">주제별</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link onClick={()=> navigate('/mark')}>북마크</Nav.Link>
            <Nav.Link onClick={()=> navigate('/review')}>후기</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=> navigate('/member/login')}>로그인</Nav.Link>
            <Nav.Link onClick={()=> navigate('/member/join')}>회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="none" style={{ display: "none" }}></div>
    </div>
  );
}

export default Header;
