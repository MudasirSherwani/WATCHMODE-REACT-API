import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import MoviesDetailItems from '../components/Details/MoviesDetailItems';

it('Check Changes in the Detail Page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MoviesDetailItems />} />
        </Routes>
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check rendering of div', () => {
  render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MoviesDetailItems title="title" />} />
        </Routes>
      </Router>
    </Provider>,

  );

  const detailPage = screen.getByTestId('detailpagecontainer');

  expect(detailPage).toBeInTheDocument();
});
