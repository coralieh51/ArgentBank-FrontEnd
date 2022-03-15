import { useDispatch } from "react-redux";

export default function Button({content, classStyle, type, clickAction }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({type : clickAction })
  }
    return (
        <button onClick={clickAction && handleClick} className={classStyle} type={type}>{content}</button>
    )
}