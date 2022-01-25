import style from './Select.module.css';

type SelectProps = {
  text1: string,
  text2: string,
  text3: string,
}

function Select(props: SelectProps) {
  return (
    <select className={style.select}>
      <option>{props.text1}</option>
      <option>{props.text2}</option>
      <option>{props.text3}</option>
    </select>
  );
}

export default Select;