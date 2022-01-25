import style from './PanelMenu.module.css';
import Button from '../Components/Button/Button';
import SmallButton from '../Components/SmallButton/SmallButton';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { BiExport } from "@react-icons/all-files/bi/BiExport";
import { AiOutlineSave } from "@react-icons/all-files/ai/AiOutlineSave";
import { ImUndo } from "@react-icons/all-files/im/ImUndo";
import { ImRedo } from "@react-icons/all-files/im/ImRedo";


function PanelMenu() {
  return (
    <div className={style.panelMenu}>
      <Button text=" Открыть"><AiFillFolderOpen/></Button>
      <Button text=" Новая"><AiOutlinePlus/></Button>
      <Button text=" Экспорт"><BiExport/></Button>
      <Button text=" Сохранить"><AiOutlineSave/></Button>
      <SmallButton><ImUndo/></SmallButton>
      <SmallButton><ImRedo/></SmallButton>
    </div>
  );
}

export default PanelMenu;