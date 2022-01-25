import style from './SmallButton.module.css';

type ButtonProps = {
  text: string,
  icon: string,
}

function SmallButton(props: ButtonProps) {
  return (
    <button className={style.smallButton}>{<props.icon/>}{props.text}</button>
    
  );
}

export default SmallButton;