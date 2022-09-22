import { useState } from "react";
import "./contactForm.css"

const FORM_ENDPOINT = ""; // TODO - fill on the later step


const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    setTimeout(() => {

      setSubmitted(true);

    }, 100);

  };


  if (submitted) {

    return (

      <>

        <div className="text-2L">Thank you!</div>

        <div className="text-md">We'll be in touch soon.</div>

      </>

    );

  }


  return (

    <form className="form"

      action={FORM_ENDPOINT}

      onSubmit={handleSubmit}

      method="POST"

      target="_blank"

    >

        <h1>WE'D LOVE TO HEAR FROM YOU!</h1>


      <div className="mainForm">

        <input

          type="text"


          placeholder="Your name"

          name="name"

          className="placeHolder"

          required

        />

      </div>

      <div className="mainForm">

        <input

          type="email"

          placeholder="Email"

          name="email"

          className="placeHolder"

          required

        />

      </div>

      <div className="mainForm">

        <textarea

          placeholder="Your message"

          name="message"

          className="placeHolder"

          required

        />

      </div>

      <div className="mainForm">

        <button

          className="submit"

          type="submit"

        >

          SEND!

        </button>

      </div>

    </form>

  );

};


export default ContactForm;