import React from 'react';
import renderer from 'react-test-renderer';
import { Button, Icon as RNIcon } from 'react-native-elements';
import { wrapIcon, EmptyState } from '..';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Line = wrapIcon({ IconClass: Icon, name: 'chart-line-variant' });


describe('EmptyState Tests ', function () {

   it('Icon Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'Test'} IconClass={Line}/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Only Title Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'EmptyState'} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Description Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'Test'} description={'Description'} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Actions Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'Test'} actions={
            <Button
               icon={<RNIcon name="add-circle-outline"/>}
               title=" Add Device"
            />
         } />
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Title, actions, Description Renders', () => {
      const tree = renderer.create(
         <EmptyState  title={'EmptyState'} description={'Description'} actions={
            <Button
               icon={<RNIcon name="add-circle-outline"/>}
               title=" Add Device"
            />
         }/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });
});

