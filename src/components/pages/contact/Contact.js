import React, { Component } from "react";

import "./Contact.css";

import { Form, Button } from "react-bootstrap";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleName = (e) =>
    this.setState({
      name: e.target.value,
    });

  handleEmail = (e) =>
    this.setState({
      email: e.target.value,
    });

  handleSubject = (e) => this.setState({ subject: e.target.value });

  handleMsg = (e) => this.setState({ message: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="container jumbotron bg-transparent">
        <div className="row">
          <div className="col-md">
            <div className="px-md-4">
              <h2>This is just a place holder.</h2>
              <p>
                This website template has been designed by{" "}
                <a href="https://freewebsitetemplates.com/">
                  Free Website Templates
                </a>
                for you, for free. You can replace all this text with your own
                text. You can remove any link to our website from this website
                template, you're free to use this website template without
                linking back to us. If you're having problems editing this
                website template, then don't hesitate to ask for help on the{" "}
                <a href="https://freewebsitetemplates.com/forums/">Forums</a>.
                This is just a place holder, so you can see what the site would
                look like.
              </p>

              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={this.handleName}
                    value={this.state.name}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={this.handleEmail}
                    value={this.state.email}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    onChange={this.handleSubject}
                    value={this.state.subject}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    onChange={this.handleMsg}
                    value={this.state.message}
                  />
                </Form.Group>

                <div className="d-flex flex-row-reverse">
                  <Button type="submit" className="send-btn mb-3">
                    Send
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          <div className="col-md jumbotron text-center bg-contact">
            <div className="jumbotron bg-transparent px-md-3 mb-0">
              <h3>This is just a place holder.:</h3>
              <br />
              <h1>877-433-8137</h1>
              <br />
              <h4>This is just a place holder.:</h4>
              <br />
              <h1>
                This is just a place holder, so you can see what the site would
                look like.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
