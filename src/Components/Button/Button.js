import "./Button.css";

export const Pokebutton = (props) => (
    <button className="bigButton" onClick={props.onClick}>
        {props.string}
    </button>
)
