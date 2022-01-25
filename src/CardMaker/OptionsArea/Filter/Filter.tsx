import style from './Filter.module.css';
import Text from '../Components/Text/Text';
import InputColor from '../Components/InputColor/InputColor';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function Filter() {
  return (
    <div className={style.filter}>
      <Text text='Фильтр'/>
      <div className={style.input_magrin}>
        <InputColor/>
        <input className={style.range}type="range"></input>
      </div>
    </div>
  );
}

export default Filter;