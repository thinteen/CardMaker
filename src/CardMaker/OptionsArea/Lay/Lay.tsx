import style from './Lay.module.css';
import SmallButton from '../Components/SmallButton/SmallButton';
import Text from '../Components/Text/Text';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function Lay() {
  return (
    <div className={style.lay}>
      <Text text='Слой'/>
      <div className={style.button_magrin}>
      <SmallButton icon="AiFillFolderOpen" text="<"/>
      <SmallButton icon="AiFillFolderOpen" text=">"/>
      </div>
    </div>
  );
}

export default Lay;