import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import MoviesTitleItems from '../components/homePage/MoviesTitleItems';

it('Check Changes in the Movies Title', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MoviesTitleItems title="Movie Name Here" id={1} year={2022} />} />
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
          <Route path="/" element={<MoviesTitleItems title="Movie Name Here" id={1} year={2022} />} />
        </Routes>
      </Router>
    </Provider>,

  );

  const homepage = screen.getByTestId('home-page');

  expect(homepage).toBeInTheDocument();
});
