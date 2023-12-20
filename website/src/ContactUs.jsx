import { useEffect, useState } from 'react';
import './FootersContent.css';

function ContactUs(){
    const [countLike, setCountLike] = useState(0);
    // useEffect(() => {
    //     if (countLike % 10 === 0){
    //         setCountLike(countLike * Math.floor(Math.random() * 10 + 1) + 1);
    //     }
    // }, [countLike]);

    return(
        <main className="contact-us" id="contact-us-content">
            <div className="footers_content">
                <h2 className="main_title">Contact Us</h2>
                <div className="contact_us-main_content">
                    <div>Want to learn more about Quokka Land? </div>
                    <span>Contact us  &#128231; </span>
                    <a className="contact-us-email" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${"wu.nij@northeastern.edu"}`} target="_blank" rel="noopener noreferrer">
                     wu.nij@northeastern.edu
                    </a>
                    <div>&#128241;  +1 206 687 5429</div>
                    <button type="button" onClick={() => {setCountLike(countLike + 1)}}>Like {countLike}</button>
                </div>
            </div>
        </main>
    );
}
export default ContactUs;