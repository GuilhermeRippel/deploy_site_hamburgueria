import PropTypes from 'prop-types'

function ButtonScrollTop({image, }){
    return(
        <button className='fixed right-4 bottom-3 sm:right-14 sm:bottom-11 w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center p-2' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img src={image} alt="Flecha para o topo" className='w-full'/></button>
    )
}

ButtonScrollTop.propTypes = {
    image: PropTypes.string.isRequired,
}

export default ButtonScrollTop