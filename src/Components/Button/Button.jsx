import "./Button.css"

const Button = ({text}) => {
    return (
        <div>
            <button className="animated-button1 capitalize rounded-2xl"><span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}</button>
            
        </div>
    );
};

export default Button;