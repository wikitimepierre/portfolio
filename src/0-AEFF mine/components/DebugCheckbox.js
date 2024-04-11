import { useDispatch } from "react-redux";
import { debugCheckBox } from "../app/features/debugCheckbox/debugCheckboxSlice";
import { useSelector } from 'react-redux';

export default function DebugCheckbox() {
  const dispatch = useDispatch();
  const isDebug = useSelector((state) => state.debugCheckbox.value);

  const handleClick = (e) => {
    dispatch(debugCheckBox(e.target.checked))
  }

  return (
    <input type="checkbox" id="debug" onClick={handleClick} checked={isDebug} />
  );
}
