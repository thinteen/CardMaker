import style from './TextArea.module.css';
import SmallButton from '../Components/SmallButton/SmallButton';
import Text from '../Components/Text/Text';
import Select from '../Components/Select/Select';
import InputColor from '../Components/InputColor/InputColor';

import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function TextArea() {
  return (
    <div className={style.textArea}>
      <Text text='Текст'/>
      <div className={style.button_magrin}>
        <Select text1="Open Sans" text2="Times New Roman" text3="Veles"/>
        <SmallButton icon="AiFillFolderOpen" text="B"/>
        <SmallButton icon="AiFillFolderOpen" text="I"/>
        <SmallButton icon="AiFillFolderOpen" text="U"/>
      </div>
      <div className={style.button_magrin}>
        <Select text1="12" text2="14" text3="16"/>
        <InputColor/>
      </div>
    </div>
  );
}

export default TextArea;