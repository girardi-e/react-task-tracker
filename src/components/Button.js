import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
  return (
    <div>

      <button onClick={onClick}
              style={{ backgroundColor: color}}
              className="inline text-white text-lg
                         border-0 rounded-lg  py-5 px-10 m-1.5
                         cursor-pointer">
        {text}
      </button>

    </div>
  )
}

Button.defaultProps = {
  color: 'indigo',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
