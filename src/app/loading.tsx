import React from "react";
import style from "./loading.module.css";

export default function Loading() {
  return (
    <div className={style.body}>
      <div className={style.scene}>
        <div className={style.shadow} />
        <div className={style.jumper}>
          <div className={style.spinner}>
            <div className={style.scaler}>
              <div className={style.loader}>
                <div className={style.cuboid}>
                  <div className={style.cuboid__side} />
                  <div className={style.cuboid__side} />
                  <div className={style.cuboid__side} />
                  <div className={style.cuboid__side} />
                  <div className={style.cuboid__side} />
                  <div className={style.cuboid__side} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
