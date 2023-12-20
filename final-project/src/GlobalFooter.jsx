import './GlobalFooter.css';
const footerLink =[
    {
        name: "Privacy Policy",
        path: "privacy",
    },
    {
        name: "Terms of Use",
        path: "termsOfUse",
    },
    {
        name: "Contact Us",
        path: "contactUs",
    },
    {
        name: "FAQs",
        path: "fAQs",
    },
];

function GlobalFooter({setPage}){
    const list = footerLink.map(item => {
        return(
            <div key={item.name} className="footer-link">
                <a href={`#/${item.path}`} onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', e.target.hash);
                    setPage(e.target.hash);
                }} >
                    {item.name}
                </a>
            </div>
        );
    });
  
    return(
        <>
            {list}
        </>
    );
}
export default GlobalFooter;