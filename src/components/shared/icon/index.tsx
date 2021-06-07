import React from 'react';
import { default as MaterialIcon, IconProps as MaterialIconProps } from '@material-ui/core/Icon'

type IconProps = MaterialIconProps & {
  name: string
}

const Icon = (props: IconProps) => {

  const { name, ...materialIconProps } = props

  return (
    <MaterialIcon {...materialIconProps}>
      {name}
    </MaterialIcon>
  );
};

export default Icon;