import './Header.css';
import GlobalNav from './GlobalNav';

import { useState } from 'react';
import { useRef, useId } from 'react';
import Button from './Button';

function Header(props){
    const [userName, setUserName] = useState("");
    const [isLogIn, setIsLogIn] = useState(false);
    const dialogRef = useRef();
    const id = useId();
    const content = (<div className='helloText'>
        Hello, {userName}
            <button className="subscribe_button2" onClick={() => setIsLogIn(false)}> LogOut </button> 
         </div>);

    const login =(
        <button className="subscribe_button2" type='button' onClick={() => dialogRef.current.showModal()} > Subscribe</button>
    );
    
    const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let flag = false;
        if (e.target.username.value.trim() === '') {
            setIsUserNameEmpty(true);
            flag = true;
        }
        else{
            setIsUserNameEmpty(false);
        }
        if(e.target.email.value.trim() == '' || (!e.target.email.value.includes("@"))){
            flag = true;
            setIsEmailEmpty(true);
        }
        else{
            setIsEmailEmpty(false);
        }
        if (flag) return;
        setIsLogIn(true);
        setUserName(e.target.username.value);
        dialogRef.current.close();
    }

    const onUsernameInput = (e) => {
        if (e.target.value.trim() === '') {
            setIsUserNameEmpty(true);
        }
        else{
            setIsUserNameEmpty(false);
        }
    }

    const onEmailInput = (e) => {
        if (e.target.value.trim() === '' || (!e.target.value.includes("@"))) {
            setIsEmailEmpty(true);
        }
        else{
            setIsEmailEmpty(false);
        }
    }

    const page2Title = (page) => {
        if (page === 'home'){
           return 'Quokka Land';
        } 
        else if (page === 'about'){
            return 'About';
        } 
        else if (page === 'album'){
            return 'Quokka Gallery';
        } 
        return 'Quokka Land';
    }

    const title = page2Title(props.page);

    return(
        <header className="header">
            <a id="logo_link" href="index.html" className='header__logo'>
                <img src="quokka_logo.png" alt="a Quokka logo" className='header__logo__img'/>
            </a>
            <a className="skiplink" href="#main-content">Skip to content</a> 
            <button className='change_theme_button' onClick={props.toggleTheme}>Change Theme</button>
            <div className='main_header_section'>
                <div className="user_status">{isLogIn ? content : login}</div>
                <h1 className='header__title'>
                    {title}
                </h1>
                <dialog ref={dialogRef} className='modal'>
                    <h2 className="modal_title">Subscribe to our Quokka Land!</h2>
                    <form className="register-form"  onSubmit={handleSubmit} >
                        <label htmlFor={`${id}-username`} className="register-form__input--username">
                            <span className="lable_username">Username: </span>
                            <span className="require_mark">required&nbsp;* </span>
                            <input id={`${id}-username`} className="input_username" name="username" type="text" placeholder="username" onInput={onUsernameInput}/>
                            {isUserNameEmpty ? <span className="error--username">Username is required</span> : null }
                            
                            
                        </label>
                        <label htmlFor={`${id}-email`} className="register-form__input--email">
                            <span className="lable_email">Email: </span>
                            <span className="require_mark">required&nbsp;* </span>
                            <input id={`${id}-email`} className="input_email" name="email" type="text" placeholder="email" onInput={onEmailInput} />
                            {isEmailEmpty ? <span className="error--email">Please enter correct email address</span> : null}
                        </label>
                        <Button className="subscribe_button" type="submit" visual ="button" text="Subscribe" />
                        <Button className="cancel_button" type="button" visual ="button" text="Cancel" onClick={() => dialogRef.current.close()}/>
                        </form>
                </dialog>
            </div> 
            <GlobalNav setPage={props.setPage}/>
       
        </header>
    );
}
export default Header;
