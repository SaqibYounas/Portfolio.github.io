import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsClient from '../SkillsPage';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  };
});

describe('SkillsClient Component', () => {
  const mockData = [
    {
      title: 'Frontend',
      color: 'text-blue-400',
      skills: [
        { name: 'React', icon: <span>R</span> },
        { name: 'Next.js', icon: <span>N</span> },
      ],
    },
    {
      title: 'Backend',
      color: 'text-green-400',
      skills: [
        { name: 'Node.js', icon: <span>Node</span> },
        { name: 'Express', icon: <span>E</span> },
      ],
    },
  ];

  it('renders all skill sections', () => {
    render(<SkillsClient skillSections={mockData} />);
    mockData.forEach((section) => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  it('renders all skill names', () => {
    render(<SkillsClient skillSections={mockData} />);
    mockData.forEach((section) => {
      section.skills.forEach((skill) => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });
    });
  });
});
