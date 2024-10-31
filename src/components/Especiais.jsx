import CardHamburguer from "./CardHamburguer";
import Hamburguer_picanha_premium from '../assets/hamburguer_picanha_premium.jpg';
import Hamburguer_bacon_caramelizado from '../assets/hamburguer_bacon_caramelizado.jpg';
import Hamburguer_trufado from '../assets/hamburguer_trufado.jpg';
import Hamburguer_brie_figo from '../assets/hamburguer_brie_figo.jpg';
import PropTypes from 'prop-types';

function Especiais({ onPriceChangeSum, onPriceChangeSub, addToCart, removeFromCart }) {
    return (
        <div>
            <h2 className="font-bebas text-5xl text-red-600 font-bold text-center mb-5">Hambúrgueres Especiais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mb-10 border-2 lg:mx-10 p-3 rounded-lg border-gray-300 bg-white shadow-md max-h-lvh overflow-auto">
                <CardHamburguer 
                    image={Hamburguer_trufado} 
                    title="Hamburguer Gourmet Trufado" 
                    desc="Blend especial de 180g com queijo brie derretido, rúcula, cogumelos trufados e maionese de alho." 
                    price="45,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer Gourmet Trufado", price: 45.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_picanha_premium}
                    title="Hamburguer Picanha Premium" 
                    desc="Carne de picanha grelhada com queijo provolone, cebola caramelizada e molho chimichurri." 
                    price="42,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer Picanha Premium", price: 42.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_bacon_caramelizado} 
                    title="Hamburguer com Bacon Caramelizado" 
                    desc="Blend de carne com bacon caramelizado no açúcar mascavo, queijo cheddar e molho barbecue." 
                    price="44,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer com Bacon Caramelizado", price: 44.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_brie_figo} 
                    title="Hamburguer com Brie e Figo" 
                    desc="Carne bovina de 160g, queijo brie, geleia de figo, rúcula e molho de mostarda Dijon." 
                    price="48,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer com Brie e Figo", price: 48.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
            </div>
        </div>
    );
}

Especiais.propTypes = {
    onPriceChangeSum: PropTypes.func.isRequired,
    onPriceChangeSub: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default Especiais;
