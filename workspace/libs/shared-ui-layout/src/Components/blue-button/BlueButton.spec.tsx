import { render } from '@testing-library/react';

import BlueButton from './BlueButton';

describe('BlueButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlueButton />);
    expect(baseElement).toBeTruthy();
  });
});
