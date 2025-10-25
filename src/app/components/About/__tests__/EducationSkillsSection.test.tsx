import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EducationSkillsSections from '../EducationSkillsSection';
import {
  educationData,
  skillCategories,
} from '../../../data/About/educationSkills';

jest.mock('framer-motion', () => {
  const React = require('react');

  const MotionMock = ({ children, ...props }: any) => {
    const { initial, animate, whileHover, whileTap, transition, ...rest } =
      props;
    return <div {...rest}>{children}</div>;
  };

  return {
    motion: new Proxy({}, { get: () => MotionMock }),
  };
});

describe('EducationSkillsSection Component', () => {
  it('renders the main heading', () => {
    render(<EducationSkillsSections />);
    expect(screen.getByText(/Education & Skills/i)).toBeInTheDocument();
  });

  it('renders education details correctly', () => {
    render(<EducationSkillsSections />);
    expect(screen.getByText(educationData.degree)).toBeInTheDocument();
    expect(screen.getByText(educationData.institution)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(educationData.duration, 'i'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(educationData.location, 'i'))
    ).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<EducationSkillsSections />);
    skillCategories.forEach((category) => {
      expect(
        screen.getByText(new RegExp(category.title, 'i'))
      ).toBeInTheDocument();
      category.items.forEach((item) => {
        expect(screen.getByText(new RegExp(item, 'i'))).toBeInTheDocument();
      });
    });
  });
});
