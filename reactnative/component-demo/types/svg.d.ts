declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  const content: React.ComponentClass<SvgProps, any>;
  export default content
}
