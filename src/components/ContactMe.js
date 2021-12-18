import emailjs from 'emailjs-com'
import React, {useState} from "react"
// import { validateEmail } from '../utils/helpers';

const Result =() => {
    return (
        <p>Your message has been succssfully sent. Thank you!</p>
    )

}

const styles = {
    form: {
        margin: '20px',
    },
    input: {
        display: 'block',
        marginTop: '5px',
        marginBottom: '5px',
        width: '100%',
        borderRadius: '5px'
    },
    button: {
        color: 'white',
        fontFamily: 'Montserrat',
        backgroundColor: '#649173',
        borderRadius: '10px 100px / 120px'
    },
    textarea: {
        height: '150px',
        display: 'block',
        marginTop: '5px',
        marginBottom: '5px',
        width: '100%',
        borderRadius: '5px'
    }
}

export default function ContactMe() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [result, showResult] = useState(false)

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rrn8mlm', 'template_kg3j5eq', e.target, 'user_1Cqs0UiYIW4SjPWv89iuD')
        .then(res => {
            console.log(res);
        }).catch(err => {console.log(err)});
        setName('');
        setMessage('');
        setEmail('');
        showResult(true)

    
    };

    return (
        // <!-- Contact Me Section -->
    <div> 
        <div className="container">
            <div className="center pretty" id="contact-me">
                <h1>Contact Me</h1>
                <p>(561) 441-2962</p>
                <a href="mailto: karenlpion@gmail.com">Email |</a>
                <a href="https://github.com/ksapir" target="_blank" rel="noreferrer"> Github |</a>
                <a href="https://www.linkedin.com/in/karenpion/" target="_blank" rel="noreferrer">  LinkedIn</a>
            <div>
                <form style={styles.form} onSubmit={sendEmail}>
                 
                    <input style={styles.input}
                        value={email}
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        />
                    
                    <input style={styles.input}
                        value={name}
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={handleInputChange}
                        />
   
                    <textarea style={styles.textarea}
                        value={message}
                        name="message"
                        type="text"
                        placeholder="Message"
                        onChange={handleInputChange}
                        />
                    <input style={styles.button} type="submit" value="Send Message"/>
                    <div>
                        {result ? <Result /> : null }
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
}
