import style from './CardMaker.module.css';
import {Card} from '../CardMakerTypes';
import OptionsArea from './OptionsArea/OptionsArea';
import WorkSpace from './WorkSpace/WorkSpace';

type CardProps = {
  cardMaker: Card
}

function CardMaker(props: CardProps) {
  return (
    <div className={style.menu}>
      <OptionsArea/>
      <WorkSpace canvas={props.cardMaker.canvas}/>
    </div>
  );
}

export default CardMaker;