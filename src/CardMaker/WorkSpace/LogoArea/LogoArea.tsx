import style from './LogoArea.module.css';

function LogoArea() {
  return (
    <div className={style.logoArea}>
      <div className={style.text3d_wrap}>
        <span className={style.text3d}>Card Maker</span>
      </div>
    </div>
  );
}

export default LogoArea;