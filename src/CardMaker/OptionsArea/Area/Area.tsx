import style from './Area.module.css';
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function Area() {
  return (
    <div className={style.area}>
      <Text text='Область'/>
      <div className={style.button_magrin}>
        <Button icon="AiFillFolderOpen" text="Выделить"/>
        <Button icon="AiFillFolderOpen" text="Удалить"/>
      </div>
    </div>
  );
}

export default Area;