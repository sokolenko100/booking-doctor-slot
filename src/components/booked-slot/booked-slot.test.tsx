import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {BookedSlot} from './booked-slot';
import {styles} from './styles';

describe('BookedSlot component', () => {
  it('renders the correct text', async () => {
    const {getByText} = render(<BookedSlot color={'red'} />);
    const text = await waitFor(() => getByText('Slot booked'));
    expect(text).toBeDefined();
  });

  it('renders with default border left color when no color is provided', async () => {
    const {getByTestId} = render(<BookedSlot />);
    const slot = await waitFor(() => getByTestId('bookedSlotID'));
    expect(slot.props.style[0].borderLeftColor).toBe(
      styles.bookedSlot.borderLeftColor,
    );
  });

  it('renders with correct text color when color is provided', async () => {
    const {getByText} = render(<BookedSlot color={'red'} />);
    const text = await waitFor(() => getByText('Slot booked'));
    expect(text.props.style[1].color).toBe('red');
  });

  it('renders with default text color when no color is provided', async () => {
    const {getByText} = render(<BookedSlot />);
    const text = await waitFor(() => getByText('Slot booked'));
    expect(text.props.style[0].color).toBe(styles.bookedText.color);
  });

  it('matches the snapshot', async () => {
    const output = render(<BookedSlot />);

    expect(output).toMatchSnapshot();
  });
});
