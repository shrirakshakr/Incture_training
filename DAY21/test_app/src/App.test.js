import {render, screen} from '@testing-library/react';
import App from './App';

test('renders App component', () =>{
  render(<App />);
  const headingElement = screen.getByText(/React With Testing/i);
  expect(headingElement).toBeInTheDocument();
})