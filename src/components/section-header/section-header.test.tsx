import {render} from '@testing-library/react-native';
import React from 'react';
import {SectionHeader} from './section-header';

describe('SectionHeader', () => {
  it('renders the title correctly', async () => {
    const {getByText} = render(<SectionHeader title="Section Title" />);

    const sectionHeader = getByText('Section Title');
    expect(sectionHeader).toBeDefined();
  });

  it('matches the snapshot', async () => {
    const output = render(<SectionHeader title="Section Title" />);

    expect(output).toMatchSnapshot();
  });
});
