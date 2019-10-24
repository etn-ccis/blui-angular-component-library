import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Colors from '@pxblue/colors';

export interface EmptyStateProps {
   title?: string;
   description?: string;
   icon?: any; // DOM?
   actions?: any; // DOM?
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
});

export class EmptyState extends React.Component<EmptyStateProps> {
   render() {
      const { title, description, icon, actions } = this.props;
      return (
         <View style={styles.container}>
            {icon}
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {description ? <Text style={styles.description}>{description}</Text> : null}
            {actions ? actions : null}
         </View>
      )
   }
}
