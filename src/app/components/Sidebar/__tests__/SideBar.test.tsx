import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Carousel from '../SideBar';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('Carousel Component', () => {
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];

  it('renders the first image on initial render', () => {
    render(<Carousel images={images} altPrefix="Test Image" />);
    const img = screen.getByAltText('Test Image 1');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('image1.jpg'));
  });

  it('cycles to the next image automatically after 3 seconds', () => {
    render(<Carousel images={images} altPrefix="Test Image" />);

    expect(screen.getByAltText('Test Image 1')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByAltText('Test Image 2')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByAltText('Test Image 3')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByAltText('Test Image 1')).toBeInTheDocument();
  });

  it('moves to the next image when "Next Slide" button is clicked', () => {
    render(<Carousel images={images} altPrefix="Test Image" />);
    const nextButton = screen.getByRole('button', { name: /Next Slide/i });

    fireEvent.click(nextButton);
    expect(screen.getByAltText('Test Image 2')).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByAltText('Test Image 3')).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByAltText('Test Image 1')).toBeInTheDocument();
  });

  it('moves to the previous image when "Previous Slide" button is clicked', () => {
    render(<Carousel images={images} altPrefix="Test Image" />);
    const prevButton = screen.getByRole('button', { name: /Previous Slide/i });

    fireEvent.click(prevButton);
    expect(screen.getByAltText('Test Image 3')).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByAltText('Test Image 2')).toBeInTheDocument();
  });
});
