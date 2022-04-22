import propTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello' />
      <Button color='blue' text='Hello-1' />'
      <Button color='red' text='Hello-2' />
      <Button color='yellow' text='Hello-3' />
      <Button color='dark' text='Hello-4' />'
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

//css in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
