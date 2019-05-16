# PX Blue UI Components for React
This is a library of re-usable React components for use in PX Blue applications. For the most part, these components are meant to simplify building your application by providing drop-in components that implement common use cases in PX Blue and eliminate the need for multiple teams to build their own components for these.

Currently, we have components available for:
* ChannelValue
* Hero
* HeroBanner

## Installation
To install the PX Blue react components from NPM as a dependency for your project, you can run the following command in your project root:
```
yarn add @pxblue/react-components
```

## Using the components in your application
The custom components can be imported and used like you would use any other component.

```
// Colors
import * as Colors from '@pxblue/colors';

// Icons
import Trend from '@material-ui/icons/TrendingUp';
import Timer from '@material-ui/icons/Timer';
import { Pie, Battery } from '@pxblue/react-progress-icons';
import { GradeA } from '@pxblue/icons-mui';

// Hero Components
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import Hero from '@pxblue/react-components/core/Hero';
import ChannelValue from '@pxblue/react-components/core/ChannelValue';
...
<HeroBanner divider>
    <Hero
        icon={<GradeA fontSize={'inherit'} color={'inherit'} nativeColor={Colors.green[500]} />}
        label={'Healthy'}
        value={96}
        units={'/100'}
    />
    <Hero
        icon={<Pie fontSize={'inherit'} color={Colors.blue[500]} percent={65} size={36} />}
        label={'Load'}
    >
        <ChannelValue value={65} units={'%'} icon={<Trend nativeColor={Colors.red[500]} fontSize={'inherit'} />} />
    </Hero>
    <Hero
        icon={<Timer fontSize={'inherit'} color={'inherit'} />}
        label={'Estimated'}
    >
        <ChannelValue value={1} units={'h'} />
        <ChannelValue value={26} units={'m'} />
    </Hero>
    <Hero
        icon={<Battery fontSize={'inherit'} color={Colors.blue[500]} percent={100} size={36} />}
        value={'Full'}
        label={'Battery'}
    />
</HeroBanner>
```
