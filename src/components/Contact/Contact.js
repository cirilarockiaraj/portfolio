import React from "react";
import Particle from "../Particle";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiFillContacts } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={5}>
                <div style={{ width: "100%", height: "400px" }}>
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846813!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df5a3b1b%3A0x8c7b7b7b7b7b7b7b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>

              <Col md={5}>
                <Container>
                  <h2>
                    <AiFillContacts /> Contact
                  </h2>
                  <form>
                    <div className="p-field">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="p-inputtext p-component"
                        placeholder="Enter your name"
                      />
                    </div>
                    <br />
                    <div className="p-field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="p-inputtext p-component"
                        placeholder="Enter your email"
                      />
                    </div>
                    <br />
                    <div className="p-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={3}
                        className="p-inputtextarea p-component"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <br />
                    <div className="p-field">
                      <button
                        type="submit"
                        className="p-button p-component p-button-primary"
                      >
                        <span className="p-button-label">Send Message</span>
                      </button>
                    </div>
                  </form>
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
