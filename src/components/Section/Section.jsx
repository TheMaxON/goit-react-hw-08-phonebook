import { PropTypes } from 'prop-types';
import { SectionStyle } from './Section.styled.jsx';

const Section = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
