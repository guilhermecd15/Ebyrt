import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('Teste o componente <App.js />', () => {
  const { history } = renderWithRouter(<App />);

  const home = screen.getByRole('link', { name: /home/i });
  expect(home).toBeInTheDocument();

  const about = screen.getByRole('link', { name: /about/i });
  expect(about).toBeInTheDocument();

  const FavoritePok = screen.getByRole('link', { name: /favorite pokémons/i });
  expect(FavoritePok).toBeInTheDocument();

  userEvent.click(home);
  const homePage = screen.getByRole('heading', { name: /encountered pokémons/i });
  expect(homePage).toBeInTheDocument();

  userEvent.click(about);
  const aboutPage = screen.getByRole('heading', { name: /about pokédex/i });
  expect(aboutPage).toBeInTheDocument();

  userEvent.click(FavoritePok);
  const favoritePokPage = screen.getByRole('heading', { name: /favorite pokémons/i });
  expect(favoritePokPage).toBeInTheDocument();

  history.push('/test');
  const notFound = screen.getByRole('heading', {
    name: /page requested not found crying emoji/i });
  expect(notFound).toBeInTheDocument();
});
