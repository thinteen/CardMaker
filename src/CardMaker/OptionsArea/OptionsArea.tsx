import style from './OptionsArea.module.css';
import PanelMenu from '../OptionsArea/PanelMenu/PanelMenu';
import Size from '../OptionsArea/Size/Size';
import Background from '../OptionsArea/Background/Background'
import Images from '../OptionsArea/Images/Images'
import Area from '../OptionsArea/Area/Area'
import Lay from '../OptionsArea/Lay/Lay'
import Filter from '../OptionsArea/Filter/Filter'
import TextArea from '../OptionsArea/TextArea/TextArea'

function OptionsArea() {
  return (
    <div className={style.optionsArea}>
      <PanelMenu/>
      <Size/>
      <Background/>
      <Images/>
      <TextArea/>
      <Filter/>
      <Area/>
      <Lay/>
    </div>
  );
}

export default OptionsArea;