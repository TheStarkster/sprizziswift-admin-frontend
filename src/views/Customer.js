import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormText,
} from "reactstrap";

export default class Customer extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5>Sales Representative</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect">
                      Select Sales Representative
                    </Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Empty</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5>Customer Information</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect">Group</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Wholesaler</option>
                      <option>VIP Member</option>
                      <option>Private Sales Member</option>
                    </Input>
                  </FormGroup>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Customer Name</Label>
                        <Input type="text" placeholder="Full Name" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Customer Email</Label>
                        <Input type="email" placeholder="John@domain.com" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Customer Phone Number</Label>
                        <Input type="number" placeholder="Phone Number" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Customer Mobile Number</Label>
                        <Input type="number" placeholder="Mobile Number" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5>Customer Address</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Col md="12" className="Catagory-col">
                      <h6>Customer's Billing Address</h6>
                      <Form>
                        <FormGroup>
                          <Label for="exampleSelect">Prefix</Label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Mr.</option>
                            <option>Ms.</option>
                            <option>Mrs.</option>
                          </Input>
                        </FormGroup>
                        <FormGroup inline>
                          <Label for="exampleSelect">FirstName</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Middle Name</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Last Name</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Suffix</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Company</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Street Address </Label>
                          <Input type="textarea" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">City </Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Country </Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">State/Province</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Zip/Postal Code</Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">Telephone </Label>
                          <Input type="text" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleSelect">VAT number </Label>
                          <Input type="text" />
                        </FormGroup>
                      </Form>
                    </Col>
                  </Col>
                  <Col md="6">
                    <Col md="12" className="Catagory-col">
                      <Row>
                        <Col md="6">
                          <h6>Customer's Shipping Address</h6>
                        </Col>
                        <Col md="6" className="d-flex justify-content-end">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" /> Same as Billing Address
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <fieldset>
                        <Form>
                          <FormGroup>
                            <Label for="exampleSelect">Prefix</Label>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                            >
                              <option>Mr.</option>
                              <option>Ms.</option>
                              <option>Mrs.</option>
                            </Input>
                          </FormGroup>
                          <FormGroup inline>
                            <Label for="exampleSelect">FirstName</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Middle Name</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Last Name</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Suffix</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Company</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Street Address </Label>
                            <Input type="textarea" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">City </Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Country </Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">State/Province</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Zip/Postal Code</Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">Telephone </Label>
                            <Input type="text" />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleSelect">VAT number </Label>
                            <Input type="text" />
                          </FormGroup>
                        </Form>
                      </fieldset>
                    </Col>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <h5>Customer Account</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <Label>User ID</Label>
                        <Input type="text" placeholder="userId" />
                        <FormText>
                          Try To make User Id a Combination of First Name and
                          Random 3 digit integer
                        </FormText>
                      </Col>
                      <Col md="6">
                        <Label>Password</Label>
                        <Input type="text" placeholder="password" />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12 d-flex justify-content-end">
                <Button
                  color="success"
                  style={{ marginBottom: "12px", padding: "12px" }}
                >
                  Save Customer
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
