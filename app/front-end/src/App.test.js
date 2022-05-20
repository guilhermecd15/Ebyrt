import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);

  const textArea = screen.getByRole('textbox', { id: /textArea/i });
  expect(textArea).toBeInTheDocument();

  const combobox = screen.getByRole('combobox');
  expect(combobox).toBeInTheDocument();

  const pendente = screen.getByRole('option', { name: /Pendente/i });
  expect(pendente).toBeInTheDocument();

  const emAndamento = screen.getByRole('option', { name: /Em andamento/i });
  expect(emAndamento).toBeInTheDocument();

  const pronto = screen.getByRole('option', { name: /Pronto/i });
  expect(pronto).toBeInTheDocument();
});
