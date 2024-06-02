import { render } from '@testing-library/react';

import RedButton from './RedButton';

describe('RedButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedButton />);
    expect(baseElement).toBeTruthy();
  });
});
