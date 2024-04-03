import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import { useFormikContext } from 'formik';


const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    // Send form data to the specified URL
                    const response = await fetch("https://getform.io/f/jbwxqroa", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(values),
                    });
                
                    // Check if the request was successful
                    if (response.ok) {
                      // Show success message
                      messageRef.current.innerText =
                        "Your Message has been successfully sent. I will contact you soon.";
                      
                      // Reset the form values after successful submission
                      resetForm();
                      
                      // Clear message after 2 seconds
                      setTimeout(() => {
                        messageRef.current.innerText = '';
                      }, 2000);
                    } else {
                      // If request fails, handle the error
                      throw new Error("Failed to send message");
                    }
                  } catch (error) {
                    // Handle any errors
                    console.error("Error sending message:", error);
                  }
                }}

              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a target="blank" href="https://www.linkedin.com/in/mwungere-elite-050002263/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="blank" href="https://twitter.com/EliteMwungere">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="blank" href="https://github.com/Mwungere">
                <i className="fab fa-github"></i>
                </a>
                <a target="blank" href="https://www.instagram.com/elilay56/">
                  <i className="fab fa-instagram"></i>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
