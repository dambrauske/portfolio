import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xzblqvzp");
    if (state.succeeded) {
        return <p>Thanks for your email!</p>;
    }

    return (

        <form
            className="flex flex-col border p-4 rounded-lg w-96 h-80 gap-2 justify-around"
            onSubmit={handleSubmit}>
            {/*<label htmlFor="email">*/}
            {/*    Email Address*/}
            {/*</label>*/}
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                className="p-1 rounded outline-none bg-zinc-800 text-zinc-400"
                maxLength={3000}
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                className="p-1 rounded outline-none bg-zinc-800 text-zinc-400"
                rows={6}
                placeholder="Your message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                className="border-2 text-teal-400 rounded-full h-10 px-4 hover:bg-teal-300 hover:text-zinc-900 duration-200"
                type="submit" disabled={state.submitting}>
                Send
            </button>
        </form>
    );
};

export default ContactForm;
