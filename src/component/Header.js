// import "./Header.css";
// 메뉴바 만들기
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <div className="Header">
      {/* fixed="top"  */}
      <Navbar className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Nav className="me-auto">
            <NavDropdown title="박물관" id="basic-nav-dropdown">
              <NavDropdown.Item href="/area">지역별</NavDropdown.Item>
              <NavDropdown.Item href="/subject">주제별</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/mark">북마크</Nav.Link>
            <Nav.Link href="/review">후기</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/member/login">로그인</Nav.Link>
            <Nav.Link href="/member/join">회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="none" style={{ display: "none" }}></div>
    </div>
  );
}

export default Header;
