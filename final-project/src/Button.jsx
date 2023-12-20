import './Button.css';

function Button({type, visual, text, onClick, className}){
    let btn_type = 'button';
    if (type === 'submit') {
        btn_type = 'submit';
    }
    let combined_class_name = visual;
    if (className){
        combined_class_name = combined_class_name + " " + className;
    } 
    return(
        <button type={btn_type} className={combined_class_name} onClick={onClick}>
        {text}
        </button>
    );
}
export default Button;