import style from './Images.module.css';
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import { FiImage } from "@react-icons/all-files/fi/FiImage";
import { MdInsertEmoticon } from "@react-icons/all-files/md/MdInsertEmoticon";


function Images() {
  return (
    <div className={style.images}>
      <Text text='Изображения'/>
      <div className={style.button_magrin}>
        <Button text=" Выбрать"><AiFillFolderOpen/></Button>
        <Button text=" Pixels"><FiImage/></Button>
        <Button text=" Стикеры"><MdInsertEmoticon/></Button>
      </div>
    </div>
  );
}

export default Images;