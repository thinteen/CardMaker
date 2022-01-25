import { ArtObj } from '../../../CardMakerTypes';
import styles from './Component.module.css';

type ArtObjComponentProps = {
  artOblComponent: ArtObj,
}

function ArtObjComponent(props: ArtObjComponentProps) {
  const style = {
    left: props.artOblComponent.positionX,
    top: props.artOblComponent.positionY,
    width: props.artOblComponent.width,
    height: props.artOblComponent.height,
  }

  return (
    <img src={props.artOblComponent.src as string} style={style} className={styles.block} />
  );
}

export default ArtObjComponent;