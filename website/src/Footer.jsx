import GlobalFooter from './GlobalFooter';
// import './Footer.css';


function Footer({setPage}){
    return(
        <footer className="footer">
            <GlobalFooter className="footer__link" setPage={setPage}/>
        </footer>
    );
}

export default Footer;