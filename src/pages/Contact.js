import React from 'react';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';


const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>17 rue Louis Jasseron</p>
                            <p>69003 Lyon</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <p>06 70 43 99 66</p>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <p>regisgrare56@gmail.com</p>
                        </div>
                    </div>
                    <div className="github">
                        <div className="content">
                            <h4>github</h4>
                            <p>https://github.com/regisgrare</p>
                        </div>
                    </div>
                    {/* <SocialNetwork /> */}
                </div>
                <Buttons left={"/projet-1"} />
            </div>
        </main>
    );
};

export default Contact;