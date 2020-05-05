import React, { Component } from "react";
import Editor from "../sub-components/Editor";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Label,
  Button,
  Collapse,
  InputGroupButtonDropdown,
  InputGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  CardFooter,
} from "reactstrap";
export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    return (
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h4>Overview</h4>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="4">
                  <Label>SKU Total</Label>
                </Col>
                <Col md="4">
                  <Label>Products Reserved</Label>
                </Col>
                <Col md="4">
                  <Label>Stock Issues</Label>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <h5>12,039</h5>
                </Col>
                <Col md="4">
                  <h5>124</h5>
                </Col>
                <Col md="4">
                  <h5 style={{ color: "red" }}>2</h5>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> All Products
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Product Type</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Reserved</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>101-ELX</td>
                    <td>Silk Cream</td>
                    <td>Cosmetics</td>
                    <td>120 INR</td>
                    <td>20/23</td>
                    <td>1</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        color="primary"
                        style={{
                          width: "100%",
                          marginRight: "8px",
                          marginLeft: "8px",
                        }}
                        onClick={() => {
                          this.setState({
                            isOpen: !this.state.isOpen,
                          });
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{
                          width: "100%",
                          marginRight: "8px",
                          marginLeft: "8px",
                        }}
                        color="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr class="p" rowspan="8">
                    <td
                      colspan="8"
                      style={{
                        padding: "0px",
                      }}
                    >
                      <Collapse
                        isOpen={this.state.isOpen}
                        data-parent="#exampleAccordion"
                        id="exampleAccordion2"
                      >
                        <p className="mb-3">
                          <Card>
                            <CardBody>
                              <Row>
                                <Col md="12">
                                  <Row>
                                    <Col
                                      md="2"
                                      className="d-flex justify-content-center"
                                      style={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div
                                        style={{
                                          border: "1px solid #aaaaaa",
                                          borderRadius: "18px",
                                          overflow: "hidden",
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <img
                                          alt="Silk Cream"
                                          src={"../../assets/img/img.jpg"}
                                          width="130px"
                                        />
                                      </div>
                                      <Label
                                        style={{
                                          padding: "4px",
                                          paddingRight: "12px",
                                          paddingLeft: "12px",
                                          borderRadius: "50px",
                                          backgroundColor: "#a2a2a2",
                                          color: "white",
                                          cursor: "pointer",
                                          marginTop: "8px",
                                        }}
                                      >
                                        Add More
                                      </Label>
                                    </Col>
                                    <Col md="10">
                                      <Row>
                                        <Col md="6">
                                          <Label>Product Name</Label>
                                          <Input
                                            type="text"
                                            placeholder="Product Name"
                                            value="Silk Cream"
                                          />
                                        </Col>
                                        <Col md="6">
                                          <Label>Product Description</Label>
                                          <Input
                                            type="text"
                                            placeholder="Product Description"
                                          />
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md="6">
                                          <Row>
                                            <Col md="6">
                                              <Label>SKU</Label>
                                              <Input
                                                type="text"
                                                value="101-ELX"
                                                placeholder="SKU"
                                              />
                                            </Col>
                                            <Col md="6">
                                              <Label>Bar Code</Label>
                                              <Input
                                                type="text"
                                                placeholder="Bar Code"
                                              />
                                            </Col>
                                          </Row>
                                        </Col>
                                        <Col md="6">
                                          <Row>
                                            <Col md="6">
                                              <Label>Price</Label>
                                              <InputGroup>
                                                <Input />
                                                <InputGroupButtonDropdown
                                                  addonType="append"
                                                  isOpen={
                                                    this.state.dropdownOpen
                                                  }
                                                  toggle={this.toggleDropDown}
                                                >
                                                  <DropdownToggle caret>
                                                    INR
                                                  </DropdownToggle>
                                                  <DropdownMenu>
                                                    <DropdownItem>
                                                      INR
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      USD
                                                    </DropdownItem>
                                                  </DropdownMenu>
                                                </InputGroupButtonDropdown>
                                              </InputGroup>
                                            </Col>
                                            <Col md="6">
                                              <Label>Compare Price</Label>
                                              <InputGroup>
                                                <Input />
                                                <InputGroupButtonDropdown
                                                  addonType="append"
                                                  isOpen={
                                                    this.state.dropdownOpen
                                                  }
                                                  toggle={this.toggleDropDown}
                                                >
                                                  <DropdownToggle caret>
                                                    INR
                                                  </DropdownToggle>
                                                  <DropdownMenu>
                                                    <DropdownItem>
                                                      INR
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                      USD
                                                    </DropdownItem>
                                                  </DropdownMenu>
                                                </InputGroupButtonDropdown>
                                              </InputGroup>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col md="6">
                                          <Label>Stock</Label>
                                          <Input
                                            type="number"
                                            placeholder="Stock"
                                          />
                                        </Col>
                                        <Col md="6">
                                          <Row>
                                            <Col md="6">
                                              <Label>Stock Issue</Label>
                                              <Input
                                                type="number"
                                                placeholder="Raise Issue after"
                                              />
                                            </Col>
                                            <Col md="6">
                                              <Label>Reserve</Label>
                                              <Input
                                                type="number"
                                                placeholder="Reserved Items"
                                              />
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </CardBody>
                            <CardFooter>
                              <Row>
                                <Col
                                  md="12"
                                  className="d-flex justify-content-end"
                                >
                                  <Button
                                    color="primary"
                                    style={{
                                      marginRight: "8px",
                                    }}
                                  >
                                    Advanced Edit
                                  </Button>
                                  <Button color="success">Save</Button>
                                </Col>
                              </Row>
                            </CardFooter>
                          </Card>
                        </p>
                      </Collapse>
                    </td>
                  </tr>
                  {/* <tr>
                    <td>2</td>
                    <td>394-EZL</td>
                    <td>Ellizaveca Aqua Deep Mask</td>
                    <td>Cosmetics</td>
                    <td>150 INR</td>
                    <td>10/80</td>
                    <td>12</td>
                  </tr> */}
                </tbody>
              </Table>
              <nav>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
