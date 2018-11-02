import React from "react";

import Layout from "../components/layout";

import { Form, Button, Title, Input, Label } from "./styles/contact.style";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = { messageSent: false };
  }

  state = {
    name: "",
    email: "",
    message: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    if (!this.state.messageSent) {
      e.preventDefault();
      fetch(process.env.ZAPIER_URL, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          contact: {
            ...this.state,
            date: new Date().toLocaleString("en-US", { hour12: false })
          }
        })
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({ messageSent: true });
            this.setState({ name: "", email: "", message: "" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    const messageSent = this.state.messageSent;

    return (
      <Layout>
        <Form name="contact">
          <Title>Contact Me!</Title>

          <Label type="Name:">
            <Input
              name="name"
              placeholder="Tell me your name"
              value={this.state.name}
              onChange={e => this.change(e)}
              disabled={this.state.messageSent ? "disabled" : ""}
            />
          </Label>

          <Label type="Email:">
            <Input
              name="email"
              placeholder="Let me know how to contact you back"
              value={this.state.email}
              onChange={e => this.change(e)}
              disabled={this.state.messageSent ? "disabled" : ""}
            />
          </Label>

          <Label type="Message:">
            <Input
              name="message"
              placeholder="What do you want to tell me?"
              value={this.state.message}
              onChange={e => this.change(e)}
              disabled={this.state.messageSent ? "disabled" : ""}
            />
          </Label>

          <Button
            type="submit"
            onClick={e => this.onSubmit(e)}
            value={messageSent ? "OK! Menssage sent!" : "Send Message"}
            disabled={messageSent ? true : false}
          />
        </Form>
      </Layout>
    );
  }
}

export default Contact;
