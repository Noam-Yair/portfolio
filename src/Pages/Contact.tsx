import './Page.css';
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <section>
        <div>
            <h1 className="projects">Contact Me</h1>
            <h2 className="contact"> Have a question or want to work together?</h2>
            <ContactForm/>

        </div>
        </section>
    )
}

export default Contact