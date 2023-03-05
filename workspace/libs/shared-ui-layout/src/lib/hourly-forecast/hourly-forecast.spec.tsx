import React from 'react';
import { render } from '@testing-library/react-native';

import HourlyForecast from './hourly-forecast';

describe('HourlyForecast', () => {
  it('should render successfully', () => {
    const { container } = render(<HourlyForecast />);
    expect(container).toBeTruthy();
  });
});
