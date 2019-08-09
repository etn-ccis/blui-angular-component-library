import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Drawer, wrapIcon } from '@pxblue/react-native-components';
import Leaf from '@pxblue/icons-svg/leaf.svg';
import Water from '@pxblue/icons-svg/water.svg';
import Device from '@pxblue/icons-svg/device.svg';
import Pxwhite from '@pxblue/icons-svg/pxwhite.svg';
import Basketball from '@pxblue/icons-svg/basketball_hoop.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    const { pages, title, subtitle } = this.props;
    const { activeItem } = this.state;
    if ( pages === 1) {
      return (
        <Drawer title={title} subtitle={subtitle}>
          <Drawer.Page>
            <Drawer.Section title={'Section 1'}>
              <Drawer.Item active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>
              <Drawer.Item active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Water Pumps'} IconClass={WaterIcon}/>
              <Drawer.Item active={activeItem === 'third'} onPress={() => this.setActive('third')} label={'Devices'} IconClass={DeviceIcon}/>
            </Drawer.Section>
            <Drawer.Section title={'Section 2'} divider={false}>
              <Drawer.Item active={activeItem === 'fourth'} onPress={() => this.setActive('fourth')} label={'PX White'} IconClass={PxwhiteIcon}/>
              <Drawer.Item active={activeItem === 'fifth'} onPress={() => this.setActive('fifth')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
            </Drawer.Section>
          </Drawer.Page>
        </Drawer>
      )
    } else {
      return (
        <Drawer title={title} subtitle={subtitle}>

          <Drawer.Page>
            <Drawer.Section title={'Section 1'}>
              <Drawer.Item active={activeItem === 'first'} onPress={() => this.setActive('first')} label={'Environment'} IconClass={LeafIcon}/>
              <Drawer.Item active={activeItem === 'second'} onPress={() => this.setActive('second')} label={'Water Pumps'} IconClass={WaterIcon}/>
              <Drawer.Item active={activeItem === 'third'} onPress={() => this.setActive('third')} label={'Devices'} IconClass={DeviceIcon}/>
            </Drawer.Section>
            <Drawer.Section title={'Section 2'} divider={false}>
              <Drawer.Item active={activeItem === 'fourth'} onPress={() => this.setActive('fourth')} label={'PX White'} IconClass={PxwhiteIcon}/>
              <Drawer.Item active={activeItem === 'fifth'} onPress={() => this.setActive('fifth')} label={'Shooty Hoops'} IconClass={BasketballIcon}/>
            </Drawer.Section>
          </Drawer.Page>

          <Drawer.Page>
            <Drawer.Section divider={false}>
              <Drawer.Item active={activeItem === 'sixth'} onPress={() => this.setActive('sixth')} label={'Settings'} IconClass={SettingsIcon}/>
            </Drawer.Section>
          </Drawer.Page>

        </Drawer>
      )
    }

  }

}

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
  .add('Drawer with one page', () => (
    <DrawerStory
      pages={1}
      title={text('title', 'User Name')}
      subtitle={text('subtitle', 'username@test.com')}
    />
  ))
  .add('Drawer with two pages', () => (
    <DrawerStory
      pages={2}
      title={text('title', 'User Name')}
      subtitle={text('subtitle', 'username@test.com')}
    />
  ));
