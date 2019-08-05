import React, { ComponentType, Component } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconProps } from 'react-native-vector-icons/Icon';

import Leaf from '@pxblue/icons-svg/leaf.svg';
import Flow from '@pxblue/icons-svg/flow.svg';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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

export enum IconType {
  PxBlue = 'PX_BLUE',
  MaterialCommunityIcons = 'MATERIAL_COMMUNIT_ICONS',
  Ionicon = 'IONICON',
}

export interface Props {
  type: IconType;
  name: string;
  color: string;
  size: number;
}
export class GeneralIcon extends Component<Props> {
  public render() {
    const { type, name, size, color } = this.props;

    switch(type) {
      case IconType.PxBlue:
        switch (name) {
          case 'flow':
            return <Flow fill={color} width={size} height={size} />
          case 'leaf':
            return <Leaf fill={color} width={size} height={size} />
        }
      case IconType.MaterialCommunityIcons:
        return (
          <MaterialCommunityIcon name={name} size={size} color={color} />
        )
    }
  }
}
