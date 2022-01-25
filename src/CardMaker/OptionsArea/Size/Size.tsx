import style from './Size.module.css';
import Text from '../Components/Text/Text';
import Input from '../Components/Input/Input';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function Size() {
  return (
    <div className={style.size}>
      <Text text="Укажите размер холста"/>
      <div>
        <Input/>
        <Input/>
      </div>
    </div>
  );
}

export default Size;