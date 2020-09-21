import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <h1>Kontaktformulär</h1>
      <p className={styles.formText}>
        Har ni frågor om catering eller vill få en prisuppgift?{" "}
        <span> Kontakta oss.</span>
      </p>
      <form action="https://formspree.io/meqpqaep" method="POST">
        <div className={styles.upperForm}>
          <label>
            <p>Namn:</p>
            <input type="text" name="name" />
          </label>
          <label>
            <p> Din E-post:</p>
            <input type="text" name="_replyto" />
          </label>
        </div>
        <label>
          <p> Meddelande:</p>
          <textarea name="message"></textarea>
        </label>

        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/mat-och-catering"
        />

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default ContactForm;
