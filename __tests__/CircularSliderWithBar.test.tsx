import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom'; // Import ReactDOM if not already imported
import CircularSliderWithBar from '../src/components/CircularSliderWithBar';
import { describe, it, expect } from '@jest/globals';

describe('CircularSliderWithBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CircularSliderWithBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('initially displays a value of 0', () => {
    const { getByText } = render(<CircularSliderWithBar />);
    const valueElement = getByText('0');
    expect(valueElement).toBeTruthy();
  });

  it('updates the value when the slider is changed', () => {
    const { getByRole, getByText } = render(<CircularSliderWithBar />);
    const slider = getByRole('slider');
    fireEvent.change(slider, { target: { value: '5' } });
    const valueElement = getByText('50'); // 5 * 10
    expect(valueElement).toBeTruthy();
  });
});