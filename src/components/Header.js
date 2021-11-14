import Proptypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = () => {
    console.log('Click')
  }

  return (

    <header className="py-6 flex justify-between">

      <h1 className="text-white text-5xl text-center font-bold">
        {title}
      </h1>

      <Button text='Add' color='black' onClick={onClick} />

    </header>

  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: Proptypes.string.isRequired,
}

//CSS in JS
{/* <h1 style={headingStyle}>Style in JS</h1> */}
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
