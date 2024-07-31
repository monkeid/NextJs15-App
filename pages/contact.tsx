import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className={styles.inputField} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className={styles.inputField} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" className={styles.inputField} required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
