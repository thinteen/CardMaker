import style from './Lay.module.css';
import SmallButton from '../Components/SmallButton/SmallButton';
import Text from '../Components/Text/Text';
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";

function Lay() {
  return (
    <div className={style.lay}>
      <Text text='Слой'/>
      <div className={style.button_magrin}>
        <SmallButton><AiOutlineArrowDown/></SmallButton>
        <SmallButton><AiOutlineArrowUp/></SmallButton>
      </div>
    </div>
  );
}

export default Lay;