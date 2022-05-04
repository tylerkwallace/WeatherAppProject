import { render } from '@testing-library/react';
import Clock from '../Components/Clock';

test('clock should update', () => {
  const { container } = render(<Clock />)
  expect(container.getElementsByClassName('clock').length).toBe(1);
  });