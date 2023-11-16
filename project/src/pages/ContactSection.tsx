import ContactForm from "../components/ContactForm.tsx";

const ContactSection = () => {
    return (
        <section id="contact" className="bg-zinc-900 min-h-screen py-12 flex flex-col items-center">
            <h2 className="text-8xl font-bold text-center text-zinc-300 opacity-5 py-12">Contact</h2>
            <h1 className="text-zinc-400 text-xl mb-4 tracking-wider">Let's talk!</h1>
            <ContactForm/>
        </section>
    );
};

export default ContactSection;
