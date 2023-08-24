import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input';

describe('<Input />', () => {
  const label = 'Amount';
  const mockOnChange = jest.fn();
  const value = '10';

  const props = {
    label,
    onChange: mockOnChange,
    value,
  };

  it('renders the label and input correctly', () => {
    render(<Input {...props} />);

    const labelForInput = screen.getByText('Amount');
    const inputElement = screen.getByLabelText('Amount') as HTMLInputElement;

    expect(labelForInput).toBeInTheDocument();
    expect(labelForInput).toHaveTextContent(label);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('10');
  });

  it('handles onChange for input when appropriate', async () => {
    render(<Input {...props} />);

    const inputElement = screen.getByLabelText('Amount') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('10');

    fireEvent.change(inputElement, { target: { value: '20' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('20');
  });
});