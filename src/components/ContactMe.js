import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

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
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }
        setName('');
        setMessage('');
        setEmail('');
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
                <form style={styles.form}>
                    <input style={styles.input}
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input style={styles.input}
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                    <textarea style={styles.textarea}
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                    <button style={styles.button} type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    )
}
