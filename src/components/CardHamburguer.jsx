import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function CardHamburguer({ id, image, title, desc, price, onPriceChangeSum, onPriceChangeSub, addToCart }) {
    const [quantity, setQuantity] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const addQuantity = () => {
        const formattedPrice = parseFloat(price.replace(',', '.'));
        setQuantity(quantity + 1);
        onPriceChangeSum(formattedPrice);

        addToCart({
            id,
            title,
            price: formattedPrice,
            image
        });
    }
    

    useEffect(() => {
        if (typeof onPriceChangeSum === 'function') {
            onPriceChangeSum(finalPrice);
        }
    }, [finalPrice, onPriceChangeSum]);

    useEffect(() => {
        if (typeof onPriceChangeSub === 'function'){
            onPriceChangeSub(finalPrice)
        }
    }, [finalPrice, onPriceChangeSub])

    return (
        <div className="min-w-1/2 min-h-96 bg-white rounded-lg shadow-lg flex flex-col justify-between border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="w-full h-2/3 overflow-hidden rounded-t-lg">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="px-4 py-3 flex flex-col justify-between">
                <h1 className="font-bebas text-2xl text-gray-800 mb-2">{title}</h1>
                <div className='max-h-18 overflow-y-auto max-w-full'>
                    <p className="text-sm text-gray-600 mb-4">{desc}</p>
                </div>
                <p className="text-lg font-semibold text-gray-800">R$ {price}</p>
            </div>
            <div className='flex items-center justify-center'>
                <button className="w-full font-bold bg-red-500 hover:bg-red-700 h-10 text-white transition-colors duration-300 ease-in-out rounded-b-lg" onClick={addQuantity}>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
}

CardHamburguer.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onPriceChangeSum: PropTypes.func.isRequired,
    onPriceChangeSub: PropTypes.func.isRequired,
    addToCart: PropTypes.func,
};

export default CardHamburguer;
