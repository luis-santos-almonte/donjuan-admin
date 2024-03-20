import React from "react";
import {
  Collapse,
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

function Header(props) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Navbar color={"dark"} expand="lg" className={"navbar-absolute fixed-top"}>
      <Container fluid>
        <Collapse navbar className="justify-content-end">
          <Nav navbar>
            <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
            >
              <DropdownToggle caret nav>
                <i className="nc-icon nc-circle-10" />
                <p>
                  <span className="d-lg-none d-md-block">Some Actions</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a">Perfil</DropdownItem>
                <DropdownItem tag="a">Registrar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
