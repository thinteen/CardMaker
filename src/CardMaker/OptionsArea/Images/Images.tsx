import style from './Images.module.css';
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function Images() {
  return (
    <div className={style.images}>
      <Text text='Изображения'/>
      <div className={style.button_magrin}>
        <Button icon="AiFillFolderOpen" text="Выбрать"/>
        <Button icon="AiFillFolderOpen" text="Pixels"/>
        <Button icon="AiFillFolderOpen" text="Cтикеры"/>
      </div>
    </div>
  );
}

export default Images;