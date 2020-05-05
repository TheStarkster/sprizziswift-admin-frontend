import React, { Component, createRef } from "react";
import Editor from "../sub-components/Editor";
import TagsInput from "../sub-components/TagInput";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import CategoryChips from "../sub-components/categorychips";
import Autocomplete from "../sub-components/autosuggest";
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
  InputGroupButtonDropdown,
  InputGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormText,
} from "reactstrap";

const s26 = {
  width: "100%",
};

const s50 = {
  marginLeft: "15px",
  marginTop: "7px",
};

registerPlugin(FilePondPluginImagePreview);
export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.categoryRef = createRef();
    this.categoryAutocompleteRef = createRef();
    this.state = {
      categorySuggestion: [],
      dropdownOpen: false,
      OptionArray: [
        <Row>
          <Col md="4">
            <Label>Option Name</Label>
            <Input type="text" placeholder="Option Name" />
          </Col>
          <Col md="6">
            <Label>Option Value</Label>
            <TagsInput
              selectedTags={(tags) => {
                console.log(tags);
              }}
              tags={[]}
            />
          </Col>
          <Col md="2">
            <Label>Action</Label>
            <Button color="danger" style={{ width: "100%" }}>
              Delete
            </Button>
          </Col>
        </Row>,
      ],
    };
  }
  toggleDropDown = () =>
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5>Product Information</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Product Title</Label>
                        <Input type="text" placeholder="Title" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Product Description</Label>
                        <Editor />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Product Image</Label>
                        <FilePond allowMultiple={true} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Label>Organisation</Label>
                    </Col>
                    <Col md="6">
                      <div className="col category-col">
                        <h6>Product Type</h6>
                        <form
                          class="form-inline d-flex flex-row flex-fill justify-content-start"
                          style={s26}
                        >
                          <div
                            className="form-group d-inline mb-2"
                            style={{ flex: "1" }}
                          >
                            <Autocomplete
                              suggestions={this.state.categorySuggestion}
                              id={"category-suggest"}
                              categoryChipHit={this.categoryChipHit}
                              ref={this.categoryAutocompleteRef}
                            />
                          </div>
                          <div class="form-group">
                            <button
                              class="btn btn-primary"
                              type="button"
                              style={s50}
                              data-toggle="modal"
                              data-target="#CategoryModal"
                            >
                              + New
                            </button>
                          </div>
                        </form>
                        <CategoryChips
                          ref={this.categoryRef}
                          removeId={this.categoryIdfromHiddenField}
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="col category-col">
                        <h6>Vendor</h6>
                        <form
                          class="form-inline d-flex flex-row flex-fill justify-content-start"
                          style={s26}
                        >
                          <div
                            className="form-group d-inline mb-2"
                            style={{ flex: "1" }}
                          >
                            <Autocomplete
                              suggestions={this.state.categorySuggestion}
                              id={"category-suggest"}
                              categoryChipHit={this.categoryChipHit}
                              ref={this.categoryAutocompleteRef}
                            />
                          </div>
                          <div class="form-group">
                            <button
                              class="btn btn-primary"
                              type="button"
                              style={s50}
                              data-toggle="modal"
                              data-target="#CategoryModal"
                            >
                              + New
                            </button>
                          </div>
                        </form>
                        <CategoryChips
                          ref={this.categoryRef}
                          removeId={this.categoryIdfromHiddenField}
                        />
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="12">
                      <Label>Tags</Label>
                      <div className="col category-col">
                        <form
                          class="form-inline d-flex flex-row flex-fill justify-content-start"
                          style={s26}
                        >
                          <div
                            className="form-group d-inline mb-2"
                            style={{ flex: "1" }}
                          >
                            <Autocomplete
                              suggestions={this.state.categorySuggestion}
                              id={"category-suggest"}
                              categoryChipHit={this.categoryChipHit}
                              ref={this.categoryAutocompleteRef}
                            />
                          </div>
                          <div class="form-group">
                            <button
                              class="btn btn-primary"
                              type="button"
                              style={s50}
                              data-toggle="modal"
                              data-target="#CategoryModal"
                            >
                              + New
                            </button>
                          </div>
                        </form>
                        <CategoryChips
                          ref={this.categoryRef}
                          removeId={this.categoryIdfromHiddenField}
                        />
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md="6">
                      <Label>Price</Label>
                      <InputGroup>
                        <Input />
                        <InputGroupButtonDropdown
                          addonType="append"
                          isOpen={this.state.dropdownOpen}
                          toggle={this.toggleDropDown}
                        >
                          <DropdownToggle caret>INR</DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>INR</DropdownItem>
                            <DropdownItem>USD</DropdownItem>
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
                          isOpen={this.state.dropdownOpen}
                          toggle={this.toggleDropDown}
                        >
                          <DropdownToggle caret>INR</DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>INR</DropdownItem>
                            <DropdownItem>USD</DropdownItem>
                          </DropdownMenu>
                        </InputGroupButtonDropdown>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <h6>Inventory Information</h6>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>SKU</Label>
                        <Input type="text" placeholder="Stock Keeping Unit" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Barcode</Label>
                        <Input type="text" placeholder="ISBN, UPC, GTIN etc." />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Stock</Label>
                        <Input type="number" placeholder="Item in Stock" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Reserve</Label>
                        <Input type="number" placeholder="Item To Reserve" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Stock Issue</Label>
                        <Input
                          type="number"
                          placeholder="Raise Item Issue after"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <h6>Other Information</h6>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Weight</Label>
                        <InputGroup>
                          <Input />
                          <InputGroupButtonDropdown
                            addonType="append"
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggleDropDown}
                          >
                            <DropdownToggle caret>Kg</DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Kg</DropdownItem>
                              <DropdownItem>gm</DropdownItem>
                            </DropdownMenu>
                          </InputGroupButtonDropdown>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Row
                        style={{
                          marginBottom: "8px",
                        }}
                      >
                        <Col md="6" className="d-flex align-items-end">
                          <h6>Variants</h6>
                        </Col>
                        <Col md="6" className="d-flex justify-content-end">
                          <Button color="primary">Add New Option</Button>
                        </Col>
                      </Row>
                      <div className="category-col">
                        {this.state.OptionArray}
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Button color="success">Save Product</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
