import React, { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconProps } from 'react-native-vector-icons/Icon';

interface IconSetArg {
  IconClass: ComponentType<IconProps>;
  name: string;
};

interface PxBlueIconArg {
  IconClass: ComponentType<SvgProps>;
}

type IconArg = IconSetArg | PxBlueIconArg;

const isIconSetArg = (x: IconSetArg | PxBlueIconArg): x is IconSetArg =>
  (x as any).name !== undefined;

export const wrapIcon = (arg: IconArg) => {
    if (isIconSetArg(arg)) {
      const { name,  IconClass } = arg;
      return (props: { size: number, color: string }) => (
        <IconClass name={name} color={props.color} size={props.size} testID={'icon'} />
      );
    } else {
      const { IconClass } = arg;
      return (props: { size: number, color: string }) => (
        <IconClass fill={props.color} width={props.size} height={props.size} testID={'icon'} />
      );
    }
  };
