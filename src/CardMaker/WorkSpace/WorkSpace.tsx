import style from './WorkSpace.module.css';
import LogoArea from './LogoArea/LogoArea';
import {Canvas as CanvasType} from '../../CardMakerTypes';
import Canvas from './Canvas/Canvas';

type WorkSpaceProps = {
  canvas: CanvasType
}

function WorkSpace(props: WorkSpaceProps) {
  return (
    <div className={style.workSpace}>
      <LogoArea/>
      <Canvas canvas={props.canvas}/>
    </div>
  );
}

export default WorkSpace;