import style from './TextArea.module.css';
import SmallButton from '../Components/SmallButton/SmallButton';
import Text from '../Components/Text/Text';
import Select from '../Components/Select/Select';
import InputColor from '../Components/InputColor/InputColor';
import { FaBold } from "@react-icons/all-files/fa/FaBold";
import { FaItalic } from "@react-icons/all-files/fa/FaItalic";
import { FaUnderline } from "@react-icons/all-files/fa/FaUnderline";

function TextArea() {
  return (
    <div className={style.textArea}>
      <Text text='Текст'/>
      <div className={style.button_magrin}>
        <Select text1="Open Sans" text2="Times New Roman" text3="Veles"/>
        <SmallButton><FaBold/></SmallButton>
        <SmallButton><FaItalic/></SmallButton>
        <SmallButton><FaUnderline/></SmallButton>
        
      </div>
      <div className={style.button_magrin}>
        <Select text1="12" text2="14" text3="16"/>
        <InputColor/>
      </div>
    </div>
  );
}

export default TextArea;