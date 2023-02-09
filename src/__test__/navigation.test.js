import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('Check Changes in the component Navigation', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
