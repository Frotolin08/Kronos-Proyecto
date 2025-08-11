import "../styles.css";
export default function PageDisabledModal(props) {
  return (
    <div
      className={props.triggered ? "disabledModalOn" : "disabledModalOff"}
      onClick={props.disable}
    >
      {props.innerText}
    </div>
  );
}
