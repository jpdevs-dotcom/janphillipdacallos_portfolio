import './pages-style.css/contact-stlye.css';

const Contact = () => {
    return (
        <div className="contact">
            <form action="#">
                <h2>Send me a <span>Message</span><img src="/icons/chat_message_sent_40px.png" alt="chat_message_sent_40px.png" /></h2>

                <div className="user-info">
                    <div className="name-input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name..." required />
                    </div>

                    <div className="email-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email..." required />
                    </div>
                </div>

                <div className="message-holder">
                    <label htmlFor="messageHolder">Message</label>
                    <textarea id="messageHolder" cols="30" rows="10" placeholder="Enter your message..." required ></textarea>
                </div>

                <div className="form-buttons">
                    <button type="submit" className="sendBtn">Send <img src="/icons/forward_arrow_40px.png" alt="forward_arrow_40px.png" /></button>
                    <button type="reset" className="clearBtn">Clear</button>
                </div>
            </form>

            <div className="contact-context">
                <h2>Email me.</h2>
                <h1><span>Let's talk. Tell me about your project.</span></h1>

                <p>Let's <span>create something</span> together👊</p>

                <div className="email-content">
                    <img src="/icons/Gmail Logo_30px.png" alt="Gmail Logo_30px.png" />

                    <div className="personal-email">
                        <h4>Mail me at</h4>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqmmkwsVsqzVjdDRFprhGtpqXvFHhkqkLXKlNNBnQckHVbNWNJzqdwFWQMhdXGHJwXJB" target={"_blank"}>jphillipdacallos@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;