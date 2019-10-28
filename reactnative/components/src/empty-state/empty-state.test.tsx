import React from 'react';
import renderer from 'react-test-renderer';
import { Button, Icon } from 'react-native-elements';
import {EmptyState} from "./empty-state";


describe('EmptyState Tests ', function () {

   it('Icon Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'Test'} icon={<Icon name="add-circle-outline"/>}/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Only Title Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'EmptyState'} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Only Description Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'Test'} description={'Description'} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });

   it('Only Actions Renders', () => {
      const tree = renderer.create(
         <EmptyState title={'Test'} actions={
            <Button
               icon={<Icon name="add-circle-outline"/>}
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
               icon={<Icon name="add-circle-outline"/>}
               title=" Add Device"
            />
         }/>
      ).toJSON();
      expect(tree).toMatchSnapshot();
   });
});

