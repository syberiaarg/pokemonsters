import "./Button.css";

export const Pokebutton = (props) => (
    <button className="bigButton" onClick={props.onClick}>
        {props.string}
    </button>
)

export const Changebutton = (props) => (
    <button className="changeButton" onClick={props.onClick}>
        {props.string}
    </button>
)

export const Mailbutton = (props) => (
    <button className="mailButton" onClick={props.onClick}>
        {props.string}
    </button>
)
