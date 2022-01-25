import style from './Area.module.css';
import Button from '../Components/Button/Button';
import Text from '../Components/Text/Text';
import { BiArea } from "@react-icons/all-files/bi/BiArea";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";

function Area() {
  return (
    <div className={style.area}>
      <Text text='Область'/>
      <div className={style.button_magrin}>
        <Button text=" Выделить"><BiArea/></Button>
        <Button text=" Удалить"><AiFillDelete/></Button>
      </div>
    </div>
  );
}

export default Area;