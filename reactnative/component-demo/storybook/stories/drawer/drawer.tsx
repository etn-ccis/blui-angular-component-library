import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { color, text, withKnobs } from '@storybook/addon-knobs';
import { Drawer, wrapIcon } from '@pxblue/react-native-components';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import Water from '@pxblue/icons-svg/water.svg';
import Device from '@pxblue/icons-svg/device.svg';
import Pxwhite from '@pxblue/icons-svg/pxwhite.svg';
import Basketball from '@pxblue/icons-svg/basketball_hoop.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, Text } from 'react-native';
import { blue, gray, white } from '@pxblue/colors';
import faker from 'faker';

const LeafIcon = wrapIcon({ IconClass: Leaf });
const WaterIcon = wrapIcon({ IconClass: Water });
const DeviceIcon = wrapIcon({ IconClass: Device });
const PxwhiteIcon = wrapIcon({ IconClass: Pxwhite });
const BasketballIcon = wrapIcon({ IconClass: Basketball });
const SettingsIcon = wrapIcon({ IconClass: Icon, name: 'settings'});

interface DrawerStoryProps {
  pages: 1 | 2;
  title: string;
  subtitle?: string;
  headerContent?: React.ReactNode;
  footer?: React.ReactNode;
  backgroundColor?: string;
  fontColor?: string;
}

interface DrawerStoryState {
  activeItem: string;
}

class DrawerStory extends React.Component<DrawerStoryProps, DrawerStoryState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeItem: 'first'
    }
  }

  private setActive(item: string) {
    this.setState({
      activeItem: item
    });
  }

  render() {
    const { pages, title, subtitle, headerContent, footer, backgroundColor, fontColor } = this.props;
    const { activeItem } = this.state;
    if ( pages === 1) {
      return (
        <Drawer title={title} subtitle={subtitle} headerContent={headerContent} footer={footer} backgroundColor={backgroundColor} fontColor={fontColor}>
          <Drawer.Page>
            <Drawer.Section title={'Section 1'}>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Water Pumps'} IconClass={WaterIcon}/>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'third'} onPress={() => this.setActive('third')} label={'Devices'} IconClass={DeviceIcon}/>
            </Drawer.Section>
            <Drawer.Section title={'Section 2'} divider={false}>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'fourth'} onPress={() => this.setActive('fourth')} label={'PX White'} IconClass={PxwhiteIcon}/>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'fifth'} onPress={() => this.setActive('fifth')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
            </Drawer.Section>
          </Drawer.Page>
        </Drawer>
      )
    } else {
      return (
        <Drawer title={title} subtitle={subtitle} headerContent={headerContent} footer={footer} backgroundColor={backgroundColor} fontColor={fontColor}>

          <Drawer.Page>
            <Drawer.Section title={'Section 1'}>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Water Pumps'} IconClass={WaterIcon}/>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'third'} onPress={() => this.setActive('third')} label={'Devices'} IconClass={DeviceIcon}/>
            </Drawer.Section>
            <Drawer.Section title={'Section 2'} divider={false}>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'fourth'} onPress={() => this.setActive('fourth')} label={'PX White'} IconClass={PxwhiteIcon}/>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'fifth'} onPress={() => this.setActive('fifth')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
            </Drawer.Section>
          </Drawer.Page>

          <Drawer.Page>
            <Drawer.Section divider={false}>
              <Drawer.Item fontColor={backgroundColor} active={activeItem === 'sixth'} onPress={() => this.setActive('sixth')} label={'Settings'} IconClass={SettingsIcon}/>
            </Drawer.Section>
          </Drawer.Page>

        </Drawer>
      )
    }

  }

}

const footerStyle = {
  fontSize: 10,
  lineHeight: 14,
  letterSpacing: 0,
  color: gray[500]
};

const footer = (
  <React.Fragment>
    <Text style={footerStyle}>© Copyright 20XX Dr. Wily</Text>
    <Text style={footerStyle}>All Rights Reserved.</Text>
  </React.Fragment>
);

const headerContent = (
  <Image style={{ width: 72, height: 72, borderRadius: 72 }} source={{uri: faker.image.avatar()}}/>
);

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .add('Drawer with defaults', () => (
    <DrawerStory
      pages={2}
      title={text('title', faker.internet.userName())}
      subtitle={text('subtitle', faker.internet.exampleEmail())}
    />
  ))
  .add('Drawer with all props', () => (
    <DrawerStory
      pages={2}
      title={text('title', faker.internet.userName())}
      subtitle={text('subtitle', faker.internet.exampleEmail())}
      headerContent={headerContent}
      footer={footer}
      backgroundColor={color('backgroundColor', blue[500])}
      fontColor={color('fontColor', white[500])}
    />
  ))
  .add('Drawer with one page', () => (
    <DrawerStory
      pages={1}
      title={text('title', faker.internet.userName())}
      subtitle={text('subtitle', faker.internet.exampleEmail())}
      backgroundColor={color('backgroundColor', blue[500])}
      fontColor={color('fontColor', white[500])}
    />
  ))
  .add('Drawer with two pages', () => (
    <DrawerStory
      pages={2}
      title={text('title', faker.internet.userName())}
      subtitle={text('subtitle', faker.internet.exampleEmail())}
      backgroundColor={color('backgroundColor', blue[500])}
      fontColor={color('fontColor', white[500])}
    />
  ))
  .add('Drawer with a footer', () => (
    <DrawerStory
      pages={1}
      title={text('title', faker.internet.userName())}
      subtitle={text('subtitle', faker.internet.exampleEmail())}
      footer={footer}
      backgroundColor={color('backgroundColor', blue[500])}
      fontColor={color('fontColor', white[500])}
    />
  ))
  .add('Drawer with header content', () => (
    <DrawerStory
      pages={1}
      title={text('title', faker.internet.userName())}
      subtitle={text('subtitle', faker.internet.exampleEmail())}
      headerContent={headerContent}
      backgroundColor={color('backgroundColor', blue[500])}
      fontColor={color('fontColor', white[500])}
    />
  ));
