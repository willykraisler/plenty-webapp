import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import logo from './logo.png';
import './NavBar.css';
import ModalLogin from '../login/ModalLogin'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isOpenLogin: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isOpenLogin: !this.state.isOpenLogin
        });
    }

    render() {
        return (
            <div>
                <ModalLogin show={this.state.isOpenLogin} onClose={this.toggleModal}></ModalLogin>
                <Navbar color="light" light expand="md">
                    <img src={logo} className="NavBar-logo" />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">GitHub</NavLink>
                            </NavItem>
                            <NavItem className="nav-item-custom">
                                <Button outline color="info" size="sm">SIGN UP</Button>
                            </NavItem>
                            <NavItem className="nav-item-custom">
                                <Button outline color="success" size="sm" onClick={this.toggleModal}>LOG IN</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;