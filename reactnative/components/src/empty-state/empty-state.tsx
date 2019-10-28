import * as React from 'react';
import {Text, View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import * as Colors from '@pxblue/colors';

export interface EmptyStateProps {
   title: string;
   description?: string;
   icon?: JSX.Element;
   iconStyles?: StyleProp<ViewStyle>;
   actions?: JSX.Element;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
   },
   title: {
      fontSize: 20,
      fontWeight: '500',
      color: Colors.gray[500],
      paddingBottom: 10,
      textAlign: 'center',
   },
   description: {
      color: Colors.blue[500],
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'center',
      paddingBottom: 10,
   },
   icon: {
      marginBottom: 15,
      display: 'flex',
      fontSize: 100
   }
});

export class EmptyState extends React.Component<EmptyStateProps> {
   render() {
      const { title, description, icon, actions, iconStyles } = this.props;
      return (
         <View style={styles.container}>
            {icon ? <View style={Object.assign(styles.icon, iconStyles)}>{icon}</View> : null }
            {<Text style={styles.title}>{title}</Text>}
            {description ? <Text style={styles.description}>{description}</Text> : null}
            {actions ? actions : null}
         </View>
      )
   }
}
