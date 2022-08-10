import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { css } from 'aphrodite/no-important';
import stylesForm from './Styles.jsx'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ib62cu', 'template_2tggrki', form.current, 'ZV-Pt1rlV7ZqkpSD7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={css(stylesForm.form)}>
      <label className={css(stylesForm.label)}>Name</label>
      <input type="text" name="user_name" placeholder="Enter your name" required className={css(stylesForm.field)} />
      <label className={css(stylesForm.label)}>Email</label>
      <input type="email" name="user_email" placeholder="Enter your email" required className={css(stylesForm.field)} />
      <label className={css(stylesForm.label)}>Message</label>
      <textarea name="message" placeholder="Enter your message" className={css(stylesForm.field, stylesForm.messageField)} />
      <input type="submit" value="Send" className={css(stylesForm.formBtn)} />
    </form>
  );
};

export default ContactUs;