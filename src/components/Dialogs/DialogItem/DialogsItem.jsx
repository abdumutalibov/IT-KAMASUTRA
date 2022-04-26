import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'
const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

  return (
      <div className={style.dialog + ' ' +style.active}>
      <NavLink to={path}>
          
    <div className={style.dialogsItems}>{props.name}</div>
      </NavLink>
      </div>
  )
}

export default DialogsItem