import style from './PanelMenu.module.css';
import Button from '../Components/Button/Button';
import SmallButton from '../Components/SmallButton/SmallButton';
import { AiFillFolderOpen } from "@react-icons/all-files/ai/AiFillFolderOpen";

function PanelMenu() {
  return (
    <div className={style.panelMenu}>
      <Button text="Открыть"><AiFillFolderOpen/></Button>
      {/* <Button text="Новая"></Button>
      <Button text="Экспорт"></Button>
      <Button text="Сохранить"></Button> */}
      <SmallButton icon="AiFillFolderOpen" text="<"/>
      <SmallButton icon="AiFillFolderOpen" text=">"/>
    </div>
  );
}

export default PanelMenu;