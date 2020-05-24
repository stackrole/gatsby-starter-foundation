import React from "react"
import {RiSendPlane2Line} from "react-icons/ri";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout className="contact-page">
    <SEO 
      title="Contact"
      description="Get in touch with Stackrole"
    />
    <div className="wrapper">
      <h1>Get in Touch</h1>
      <div className="description">
        <p>Got a burning question regarding <b>JAMstack</b>, Need a new <b>Website</b>, or just want to talk in general. We always welcome a good conversation.</p>
        <p>Just send us a message using the form below or you can send us a DM on <a href="https://twitter.com/stackrole">twitter</a>.</p>
      </div>
      <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name<input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Email<input type="email" name="email" /></label>
        </p>
        <p>
          <label>Subject<input type="text" name="subject" /></label>   
        </p>
        <p>
          <label>Message<textarea name="message"></textarea></label>
        </p>
        <p className="text-align-right">
          <button className="button" type="submit">Send Message <span className="icon -right"><RiSendPlane2Line/></span></button>
        </p>
      </form>
    </div>

  </Layout>
)

export default Contact