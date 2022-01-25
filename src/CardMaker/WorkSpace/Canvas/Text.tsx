import { TextObject } from '../../../CardMakerTypes';
import styles from './Component.module.css';

type TextComponentProps = {
  textComponent: TextObject,
}

function TextComponent(props: TextComponentProps) {
  const style = {
    left: props.textComponent.positionX,
    top: props.textComponent.positionY,
    color: props.textComponent.color,
    fontSize: props.textComponent.size,
    fontWeight: props.textComponent.bold ? 700 : 400,
    textDecoration: props.textComponent.underline ? 'underline' : 'none',
    fontStyle: props.textComponent.italic ? 'italic' : 'normal',
    fontFamily: props.textComponent.fontFamily,
  }

  return (
    <div style={style} className={styles.block}>{props.textComponent.text}</div>
  );
}

export default TextComponent;