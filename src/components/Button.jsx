import { useDispatch, useStore } from "react-redux";
import { useEffect } from "react";


export default function Button({content, classStyle, type, clickAction }) {
  const store = useStore()
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({type : clickAction })
  }
    return (
        <button onClick={clickAction && handleClick} className={classStyle} type={type}>{content}</button>
    )
}