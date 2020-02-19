import React, {useState} from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import {ApplicationState} from "../store/reducers";
import {appActionCreators} from "../store/actions";
import {RouteComponentProps} from "react-router";
import {AccountState} from "../store/reducers/Account.reducer";

type LoginProps =
    AccountState &
    typeof appActionCreators &
    RouteComponentProps<{}>;

const Login = (props: LoginProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="m-5">
              <Container>
                  <Row className="justify-content-center">
                      <Col md="8">
                          <CardGroup className="mb-0">
                              <Card className="p-4">
                                  <CardBody className="card-body">
                                      <Form className="form-horizontal" onSubmit={()=>{props.requestLogin({username, password})}}>
                                          <h1>Login</h1>
                                          <p className="text-muted">Sign In to your account</p>
                                          <FormGroup row>
                                              <InputGroup className="mb-3">
                                                  <InputGroupAddon addonType="prepend">
                                                      <InputGroupText><FontAwesomeIcon icon={faUser} /></InputGroupText>
                                                  </InputGroupAddon>
                                                  <Input type="text" name="username" placeholder="Username" onChange={e=>{setUsername(e.target.value)}}/>
                                              </InputGroup>
                                              <InputGroup className="mb-4">
                                                  <InputGroupAddon addonType="prepend">
                                                      <InputGroupText><FontAwesomeIcon icon={faKey} /></InputGroupText>
                                                  </InputGroupAddon>
                                                  <Input type="password" name="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
                                              </InputGroup>
                                          </FormGroup>
                                          <FormGroup row>
                                              <Col>
                                                  <Button color="primary">Login</Button>
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
