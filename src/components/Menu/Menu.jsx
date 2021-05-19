import React from 'react';
import { CorpoMenu, MenuItem } from './styles';

export const Menu = () => {
  return (
    <CorpoMenu>
      <MenuItem>
        <div>
          <img src={window.location.origin + '/img/code.svg'} alt="" />
        </div>
        <span>Editor de código</span>
      </MenuItem>
      <MenuItem>
        <div>
          <img src={window.location.origin + '/img/group.svg'} alt="" />
        </div>
        <span>Comunidade</span>
      </MenuItem>
    </CorpoMenu>
  );
}