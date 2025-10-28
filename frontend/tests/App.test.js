import { render } from '@testing-library/react-native';
import App from '../App';

test('renderiza correctamente', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hola mundo')).toBeTruthy();
});