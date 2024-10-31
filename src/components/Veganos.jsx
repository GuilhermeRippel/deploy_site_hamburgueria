import CardHamburguer from "./CardHamburguer";
import Hamburguer_vegano_classico from '../assets/hamburguer_vegano_classico.jpg';
import Hamburguer_grao_de_bico from '../assets/hamburguer_grao_de_bico.jpg';
import Hamburguer_lentilha from '../assets/hamburguer_lentilha.jpg';
import PropTypes from 'prop-types';

function Veganos({ onPriceChangeSum, onPriceChangeSub, addToCart, removeFromCart }) {
    return (
        <div>
            <h2 className="font-bebas text-5xl text-red-600 font-bold text-center mb-5">Hambúrgueres Veganos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mb-10 border-2 lg:mx-10 p-3 rounded-lg border-gray-300 bg-white shadow-md max-h-lvh overflow-auto">
                <CardHamburguer 
                    image={Hamburguer_vegano_classico} 
                    title="Hamburguer Vegano Clássico" 
                    desc="Blend de grãos e vegetais com alface, tomate, cebola roxa e molho vegano especial." 
                    price="28,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer Vegano Clássico", price: 28.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_grao_de_bico} 
                    title="Hamburguer Grão-de-Bico" 
                    desc="Feito à base de grão-de-bico temperado com ervas, acompanhado de abacate, alface e molho tahine." 
                    price="30,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer Grão-de-Bico", price: 30.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
                <CardHamburguer 
                    image={Hamburguer_lentilha} 
                    title="Hamburguer de Lentilha" 
                    desc="Hamburguer de lentilha com beterraba, rúcula, tomate e maionese vegana de ervas." 
                    price="29,00" 
                    onPriceChangeSum={onPriceChangeSum} 
                    onPriceChangeSub={onPriceChangeSub} 
                    addToCart={() => addToCart({ title: "Hamburguer de Lentilha", price: 29.00, quantity: 1 })}
                    removeFromCart={removeFromCart} 
                />
            </div>
        </div>
    );
}

Veganos.propTypes = {
    onPriceChangeSum: PropTypes.func.isRequired,
    onPriceChangeSub: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
};

export default Veganos;
