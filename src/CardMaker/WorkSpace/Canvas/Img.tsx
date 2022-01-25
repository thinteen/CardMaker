import styles from './Component.module.css';
import { ImgObject } from '../../../CardMakerTypes';

type ImgComponentProps = {
  imgComponent: ImgObject,
}

function ImgComponent(props: ImgComponentProps) {
  const style = {
    left: props.imgComponent.positionX,
    top: props.imgComponent.positionY,
    width: props.imgComponent.width,
    height: props.imgComponent.height,
  }

  return (
    <img src={props.imgComponent.src as string} className={styles.block} style={style} />
  );
}

export default ImgComponent;