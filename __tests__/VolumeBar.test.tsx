import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { describe, it, expect } from '@jest/globals';
import VolumeBar from '../src/components/VolumeBar';


describe('VolumeBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VolumeBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays a default label', () => {
    const { getByText } = render(<VolumeBar />);
    const labelElement = getByText('Low');
    expect(labelElement).toBeTruthy();
  });

  it('updates the label when a bar is clicked', () => {
    const { getByText, getByTestId } = render(<VolumeBar />);
    const bar = getByTestId('bar-3'); // Assuming this represents the third bar
    fireEvent.click(bar);
    const labelElement = getByText('Medium'); // Assuming bar 3 corresponds to 'Medium'
    expect(labelElement).toBeTruthy();
  });
});