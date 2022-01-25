import style from './Background.module.css';
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';
import InputColor from '../Components/InputColor/InputColor';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import { FiImage } from "@react-icons/all-files/fi/FiImage";
import { AiOutlineUndo } from "@react-icons/all-files/ai/AiOutlineUndo";

function Background() {
  return (
    <div className={style.background}>
      <Text text='Фон'/>
      <div className={style.button_magrin}>
        <Button text=" Выбрать"><AiFillFolderOpen/></Button>
        <Button text=" Pixels"><FiImage/></Button>
        <Button text=" Сбросить"><AiOutlineUndo/></Button>
        <InputColor/>
      </div>
    </div>
  );
}

export default Background;