import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface SectionHeaderProps {
  title: string;
}

/**
 * SectionHeader is a functional component that renders a header for a section.
 * It takes a single prop, `title`, which is a string representing the title of the section.
 * The component returns a View with a Text element containing the title.
 *
 * @param {string} title - The title of the section.
 * @returns {JSX.Element} - A View containing a Text element with the title.
 */
export const SectionHeader: FC<SectionHeaderProps> = memo(({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  );
});
