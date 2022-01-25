import style from './Canvas.module.css';
import { ArtObj, Canvas as CanvasType, ImgObject, TextObject } from '../../../CardMakerTypes';
import Text from './Text';
import Img from './Img';
import ArtObject from './ArtObject';

type CanvasProps = {
  canvas: CanvasType
}

function Canvas(props: CanvasProps) {

  let background: string = '#ffffff';

  const color: string | null = props.canvas.background.color;
  const src: string | null = props.canvas.background.src;
  if (color !== null) {
    background = color;
  } else if (src !== null) {
    background = 'url(' + src + ')';
  }


  const styles = {
    width: props.canvas.width,
    height: props.canvas.height,
    background: background,
  }

  const filterStyle = {
    width: props.canvas.width,
    height: props.canvas.height,
    background: props.canvas.filter.color,
    opacity: props.canvas.filter.transparency,
  }

  return (
    <div className={style.canvas} style={styles} id="canvas">
      <div className={style.filter} style={filterStyle}></div>
      {
        props.canvas.listItems.map((component, index) => {
          switch (component.type) {
            case 'text':
              return <Text key={index} textComponent={component as TextObject} />;
            case 'img':
              return <Img key={index} imgComponent={component as ImgObject} />;
            case 'artObj':
              return <ArtObject key={index} artOblComponent={component as ArtObj} />;
          }
        })
      }
    </div>
  );
}

export default Canvas;

