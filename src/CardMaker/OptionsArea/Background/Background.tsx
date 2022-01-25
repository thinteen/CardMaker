import style from './Background.module.css';
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';
import InputColor from '../Components/InputColor/InputColor';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function Background() {
  return (
    <div className={style.background}>
      <Text text='Фон'/>
      <div className={style.button_magrin}>
        <Button icon="AiFillFolderOpen" text="Выбрать"/>
        <Button icon="AiFillFolderOpen" text="Pixels"/>
        <Button icon="AiFillFolderOpen" text="Cбросить"/>
        <InputColor/>
      </div>
    </div>
  );
}

export default Background;