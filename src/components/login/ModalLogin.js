import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';


class ModalLogin extends React.Component {      

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <Modal isOpen={this.props.show}>
                    <ModalHeader>Sign In</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"> Access</Button>
                        <Button color="secondary" onClick={this.props.onClose} >Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}




export default ModalLogin;