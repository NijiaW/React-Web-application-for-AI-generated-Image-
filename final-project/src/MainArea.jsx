import About from "./About";
import QuokkaLand from "./QuokkaLand";
import Album from "./Album";
import AIQuokka from "./AIQuokka";

import TermsOfUse from "./TermsOfUse";
import Privacy from "./Privacy";
import ContactUs from "./ContactUs";
import FAQs from "./FAQs";
function MainArea(props){
    const page2Main = (page) => {
        if (page === '#/home'){
           return <QuokkaLand/>;
        } 
        else if (page === '#/about'){
            return <About/>;
        } 
        else if (page === '#/gallery'){
            return <Album/>;
        } 
        else if(page == '#/aiquokka'){
            return <AIQuokka/>;
        }
        else if (page === '#/termsOfUse'){
            return <TermsOfUse/>;
        } 
        else if (page === '#/privacy'){
            return <Privacy/>;
        } 
        else if (page === '#/contactUs'){
            return <ContactUs/>;
        } 
        else if (page === '#/fAQs'){
            return <FAQs/>;
        } 
        return <QuokkaLand/>;
    }

    const mainContent = page2Main(props.page);
    return(
        <>
        {mainContent}
        </>
    );
}

export default MainArea; 