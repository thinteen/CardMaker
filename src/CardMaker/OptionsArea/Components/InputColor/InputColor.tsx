import style from './InputColor.module.css';

function InputColor() {
  return (
    <input type="color" className={style.inputColor}></input>
  );
}

export default InputColor;