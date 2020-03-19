import React, {useState} from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import {ApplicationState} from "../../../store/reducers";
import {appActionCreators} from "../../../store/actions";
import {RouteComponentProps} from "react-router";
import {AccountState} from "../../../store/reducers/Account.reducer";
import ReactDOM from "react-dom";

type LoginProps =
    AccountState &
    typeof appActionCreators &
    RouteComponentProps<{}>;

const Login: React.FC<LoginProps> = props => {
    let refSubmitBtn: any = React.createRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value)
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value)
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (username.length > 3 && password.length > 4) {
            let btn = ReactDOM.findDOMNode(refSubmitBtn);
            props.requestLogin(btn, {username, password});
        }
    };

    return(
        <div className="m-5">
              <Container>
                  <Row className="justify-content-center">
                      <Col md="8">
                          <CardGroup className="mb-0">
                              <Card className="p-4">
                                  <CardBody className="card-body">
                                      <Form onSubmit={handleSubmit}>
                                          <h1>Login</h1>
                                          <p className="text-muted">Sign In to your account</p>
                                          <FormGroup row>
                                              <InputGroup className="mb-3">
                                                  <InputGroupAddon addonType="prepend">
                                                      <InputGroupText><FontAwesomeIcon icon={faIdCard} /></InputGroupText>
                                                  </InputGroupAddon>
                                                  <Input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                                              </InputGroup>
                                              <InputGroup className="mb-4">
                                                  <InputGroupAddon addonType="prepend">
                                                      <InputGroupText><FontAwesomeIcon icon={faKey} /></InputGroupText>
                                                  </InputGroupAddon>
                                                  <Input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                                              </InputGroup>
                                          </FormGroup>
                                          <FormGroup row>
                                              <Col>
                                                  <Button
                                                      type="submit"
                                                      ref={(r) => refSubmitBtn = r}
                                                      variant="contained"
                                                      color="primary"
                                                      className="ladda-button w-full mx-auto mt-16 normal-case"
                                                      data-style="zoom-in"
                                                      aria-label="Create"
                                                  >
                                                      <span className="ladda-label">Login</span>
                                                  </Button>
                                              </Col>
                                          </FormGroup>
                                      </Form>
                                  </CardBody>
                              </Card>
                              <Card className="text-white bg-dark py-5 d-md-down-none" style={{width: 44 + '%'}}>
                                  <CardBody className="card-body text-center">
                                      <div>
                                          <h2>Branch Banking Biometrics</h2>
                                          <p>Banking redefined.</p>
                                          <a href="http://innovantics.com">
                                              <Button color="link" className="mt-5">
                                                  Powered by Innovantics&reg;
                                              </Button>
                                          </a>
                                      </div>
                                  </CardBody>
                              </Card>
                          </CardGroup>
                      </Col>
                  </Row>
              </Container>
        </div>
    );
};

export default connect(
    (state: ApplicationState) => state.counter,
    appActionCreators
)(Login as any);
