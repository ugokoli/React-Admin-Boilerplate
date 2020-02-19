import * as React from 'react';
import { Container, Row, Col, CardGroup, Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { connect } from 'react-redux';


const Login = () => (
  <div className="m-5">
      <Container>
          <Row className="justify-content-center">
              <Col md="8">
                  <CardGroup className="mb-0">
                      <Card className="p-4">
                          <CardBody className="card-body">
                              <Form className="form-horizontal" onSubmit={()=>{}}>
                                  <h1>Login</h1>
                                  <p className="text-muted">Sign In to your account</p>
                                  <FormGroup row>
                                      <InputGroup className="mb-3">
                                          <InputGroupAddon addonType="prepend">
                                              <InputGroupText><i className="icon-user"/></InputGroupText>
                                          </InputGroupAddon>
                                          <Input type="text" name="username" placeholder="Username" onChange={()=>{}}/>
                                      </InputGroup>
                                      <InputGroup className="mb-4">
                                          <InputGroupAddon addonType="prepend">
                                              <InputGroupText><i className="icon-lock"/></InputGroupText>
                                          </InputGroupAddon>
                                          <Input type="password" name="password" placeholder="Password" onChange={()=>{}}/>
                                      </InputGroup>
                                  </FormGroup>
                                  <FormGroup row>
                                      <Col>
                                          <Button color="primary" className="px-4">Login</Button>
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

export default connect()(Login);
