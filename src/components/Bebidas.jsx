import CardHamburguer from "./CardHamburguer";
import Coca_cola_lata from '../assets/coca_cola_lata.jpg';
import Garrafa_de_agua from '../assets/garrafa_de_agua.jpg';
import Cerveja_heineken from '../assets/cerveja_heineken.jpg';
import PropTypes from 'prop-types';

function Bebidas({ onPriceChangeSum, onPriceChangeSub, addToCart, removeFromCart }) {
    return (
        <div>
            <h2 className="font-bebas text-5xl text-red-600 font-bold text-center mb-5">Bebidas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mb-10 border-2 lg:mx-10 p-3 rounded-lg border-gray-300 bg-white shadow-md max-h-lvh overflow-auto">
                <CardHamburguer 
                    image={Coca_cola_lata} 
                    title="Coca Cola Lata" 
                    desc="Lata de Coca Cola de 350ml" 
                    price="6,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Coca Cola Lata", price: 6.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Garrafa_de_agua} 
                    title="Garrafa de água" 
                    desc="Garrafa de água 250ml" 
                    price="3,50" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Garrafa de água", price: 3.50, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Cerveja_heineken} 
                    title="Heineken" 
                    desc="Lata de Heineken 350ml" 
                    price="10,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Heineken", price: 10.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
            </div>
        </div>
    );
}

Bebidas.propTypes = {
    onPriceChangeSum: PropTypes.func.isRequired,
    onPriceChangeSub: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default Bebidas;
