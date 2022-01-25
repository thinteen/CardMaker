import { ReactElement } from 'react';
import style from './Button.module.css';

type ButtonProps = {
  text: string,
  children: ReactElement,
}

function Button(props: ButtonProps) {
  return (
    <button className={style.button}>{props.children}{props.text}</button>
    
  );
}

export default Button;