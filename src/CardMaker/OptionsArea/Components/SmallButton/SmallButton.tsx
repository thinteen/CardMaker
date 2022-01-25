import { ReactElement } from 'react';
import style from './SmallButton.module.css';

type ButtonProps = {
  children: ReactElement,
}

function SmallButton(props: ButtonProps) {
  return (
    <button className={style.smallButton}>{props.children}</button>
    
  );
}

export default SmallButton;