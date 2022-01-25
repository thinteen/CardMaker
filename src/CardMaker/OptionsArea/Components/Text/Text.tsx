import style from './Text.module.css';

type TextProps = {
  text: string,
}

function Text(props: TextProps) {
  return (
    <span className={style.text}>{props.text}</span>
    
  );
}

export default Text;