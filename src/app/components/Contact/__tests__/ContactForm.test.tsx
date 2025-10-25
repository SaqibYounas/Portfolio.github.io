import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';
import * as validation from '../utils/validation';

jest.mock('../utils/validation');

describe('ContactForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields and button', () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /send message/i })
    ).toBeInTheDocument();
  });

  it('shows validation error if fields are empty', async () => {
    (validation.validateForm as jest.Mock).mockReturnValue(
      'All fields are required'
    );

    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  });

  it('updates input fields correctly', () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText(/Name/i);
    const subjectInput = screen.getByPlaceholderText(/Subject/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const messageInput = screen.getByPlaceholderText(/Message/i);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(subjectInput, { target: { value: 'Hello' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a message' } });

    expect(nameInput).toHaveValue('John');
    expect(subjectInput).toHaveValue('Hello');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('This is a message');
  });

  it('displays error message for short message', async () => {
    (validation.validateForm as jest.Mock).mockReturnValue(
      'Message must be at least 10 characters.'
    );

    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Subject/i), {
      target: { value: 'Hello' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Message/i), {
      target: { value: 'short' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Message must be at least 10 characters./i)
      ).toBeInTheDocument();
    });
  });
});
