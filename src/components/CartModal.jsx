import PropTypes from 'prop-types';
import Imagem_modal from '../assets/imagem_modal.jpg';

function CartModal({ onClose, total, items, removeFromCart }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-90 fixed left-0 top-0 pt-10">
      <div className="w-5/6 sm:w-2/3 h-3/4 bg-slate-100 rounded-lg shadow-lg flex flex-col xl:flex-row relative">
        <button
          className="absolute text-black top-2 right-4 hover:font-bold text-2xl"
          onClick={onClose}
        >
          X
        </button>
        <div className="hidden xl:block w-full xl:w-1/3 h-full relative flex-grow">
          <span className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-t-lg lg:rounded-l-lg"></span>
          <img src={Imagem_modal} alt="Imagem de vários hamburgueres" className="object-cover w-full h-full rounded-t-md xl:rounded-l-md" />
        </div>
        <div className="flex flex-col items-center w-full min-h-full xl:w-2/3 p-4 bg-slate-100 rounded-lg sm:rounded-b-lg overflow-y-auto">
          <div className="flex justify-center sm:mb-4">
            <h1 className="font-bold font-bebas text-3xl sm:text-4xl text-red-500">Resumo do seu pedido</h1>
          </div>
          <div className="flex flex-col justify-between w-full gap-2 overflow-y-scroll flex-grow border-b border-gray-300 pb-5 max-h-[80%]">
            {items && items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="flex justify-between items-center w-full p-2 shadow-lg bg-white rounded-md border border-red-300">
                  <p>{item.title} <span className='font-bold'>R$ {item.price.toFixed(2)}</span></p>
                  <button onClick={() => removeFromCart(item)} className='bg-red-500 text-white font-bold py-2 px-3 sm:px-5 rounded-lg'>Remover</button>
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center">
                <p>Nenhum item no carrinho</p>
              </div>
            )}
          </div>
          <div className="flex justify-around items-center gap-5 mt-auto pt-4">
            <p className="text-base sm:text-lg">Pedido total: <span className="text-base sm:text-lg font-bold">R$ {total.toFixed(2)}</span></p>
            <button className="text-white bg-red-500 rounded-lg px-3 py-1 sm:px-5 sm:py-2 hover:shadow-xl hover:scale-105 transition-all duration-300">Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}


CartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func
};

export default CartModal;
