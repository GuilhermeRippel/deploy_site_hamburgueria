import CardHamburguer from "./CardHamburguer";
import Hamburguer_carne from '../assets/hamburguer_carne.jpg';
import Hamburguer_bacon from '../assets/hamburguer_bacon.jpg';
import Hamburguer_frango from '../assets/hamburguer_frango.jpg';
import Hamburger_picanha from '../assets/hamburguer_picanha.jpg';
import Hamburguer_costela from '../assets/hamburguer_costela.jpg';
import PropTypes from 'prop-types';

function Tradicionais({ onPriceChangeSum, onPriceChangeSub, addToCart, removeFromCart }) {
    return (
        <div>
            <h2 className="font-bebas text-5xl text-red-600 font-bold text-center mb-5">Hambúrgueres Tradicionais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mb-10 border-2 lg:mx-10 p-3 rounded-lg border-gray-300 bg-white shadow-md max-h-lvh overflow-auto">
                <CardHamburguer 
                    image={Hamburguer_carne} 
                    title="Hamburguer Carne Duplo" 
                    desc="Dois suculentos blend de 160g com queijo cheddar derretido, cebolas caramelizadas e molho especial da casa." 
                    price="36,25" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer Carne Duplo", price: 36.25, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_frango} 
                    title="Hamburguer Frango Crocante" 
                    desc="Peito de frango empanado e crocante, com alface, tomate, queijo e um toque de molho mostarda e mel." 
                    price="32,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer Frango Crocante", price: 32.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_bacon} 
                    title="Hamburguer de Bacon e Queijo" 
                    desc="Carne bovina de 160g com bacon crocante, queijo cheddar, molho barbecue e cebola crispy." 
                    price="38,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer de Bacon e Queijo", price: 38.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburger_picanha} 
                    title="Hamburguer de Picanha" 
                    desc="Blend de picanha grelhado com queijo prato, tomate, alface americana e molho de alho caseiro." 
                    price="40,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer de Picanha", price: 40.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_costela} 
                    title="Hamburguer de Costela Desfiada" 
                    desc="Costela bovina desfiada com cheddar derretido, cebolas crocantes e molho barbecue caseiro." 
                    price="47,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer de Costela Desfiada", price: 47.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
            </div>
        </div>
    );
}

Tradicionais.propTypes = {
    onPriceChangeSum: PropTypes.func.isRequired,
    onPriceChangeSub: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func
};

export default Tradicionais;
