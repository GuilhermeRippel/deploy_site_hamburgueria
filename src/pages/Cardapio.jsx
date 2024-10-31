import Hamburguer_logo from '../assets/hamburguer_logo.svg';
import Tradicionais from "../components/Tradicionais";
import Especiais from "../components/Especiais";
import Veganos from '../components/Veganos';
import Bebidas from '../components/Bebidas';
import { Link } from "react-router-dom";
import { useState, useRef} from "react";
import Footer from '../components/footer';
import Arrow_up from '../assets/arrow_up.svg'
import ButtonScrollTop from '../components/ButtonScrollTop';
import Carrinho_logo from '../assets/carrinho_logo.svg'
import CartModal from '../components/CartModal';

function Cardapio() {
    const [filter, setFilter] = useState('Nenhum')
    const categories = ["Nenhum", "Tradicionais", "Especiais", "Veganos", "Bebidas"]
    const scrollFooter = useRef()
    const [finalPrice, setFinalPrice] = useState(0.00)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [orderItems, setOrderItems] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);

    const addToCart = (item) => {
        setOrderItems(prevItems => [
            ...prevItems, 
            { ...item, id: Date.now() }
        ]);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    

    const removeFromCart = (itemToRemove) => {
        setOrderItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
        handlePriceChangeSub(itemToRemove.price);
    };

    const handleModal = () => {
        setIsModalOpen(prevState => !prevState)
    }

    
    const handlePriceChangeSum = (newPrice) => {
        setFinalPrice(prevFinalPrice => prevFinalPrice + newPrice);
    }
    
    const handlePriceChangeSub = (newPrice) => {
        setFinalPrice(prevFinalPrice => prevFinalPrice - newPrice);
    }
    
    
    const renderCategory = () => {
        switch (filter) {
            case "Tradicionais":
                return <Tradicionais  onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>;
            case "Especiais":
                return <Especiais onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>;
            case "Veganos":
                return <Veganos onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>;
            case "Bebidas":
                return <Bebidas onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>;
            default:
                return null;
        }
    }

    const scrollToFooter = () => {
        scrollFooter.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="bg-gradient-to-t from-gray-200 to-gray-100 px-8 md:px-12 lg:px-20 xl:px-28 pb-10">
        <header className="fixed bg-red-600 w-full px-2 sm:px-7 flex items-center justify-between sm:justify-around z-10 h-24 left-0">
        <div className='flex items-center gap-3'>
          <img src={Hamburguer_logo} alt="Logo Hamburguer" className='w-8 sm:w-14'/>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-bebas tracking-wider pt-2">Hamburgueria NoPonto</h1>
        </div>
  
        
        <ul className='hidden lg:flex gap-2 sm:gap-6 md:gap-12 text-lg md:text-3xl text-white font-bebas h-full items-center'>
          <Link to="/" className="cursor-pointer hover:border-b-8 hover:border-white h-full flex items-center transition-all duration-200">
            Home
          </Link>
          <li className='cursor-pointer hover:border-b-8 hover:border-white h-full flex items-center transition-all duration-200' onClick={scrollToFooter}>
            Contato
          </li>
        </ul>
        <div className='hover:scale-105 rounded-full p-1 sm:p-2 cursor-pointer flex items-center text-white font-bold text-base sm:text-lg' onClick={handleModal}>
          <img src={Carrinho_logo} alt='Logo carrinho de supermercado' className='w-10'/>
          R$ {finalPrice.toFixed(2)}
        </div>
        <button className="lg:hidden text-white text-3xl focus:outline-none" onClick={toggleMenu}>
          &#9776;
        </button>
        {menuOpen && (
          <div className="absolute top-24 left-0 w-full bg-red-600 text-white text-xl font-bebas shadow-lg lg:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              <Link to="/" className="cursor-pointer hover:scale-105 transition-all duration-200" onClick={toggleMenu}>
                Home
              </Link>
              <li className='cursor-pointer hover:scale-105 transition-all duration-200' onClick={() => { scrollToFooter(); toggleMenu(); }}>
                Contato
              </li>
            </ul>
          </div>
        )}
      </header>
            <div className="w-full pt-32 border-b-yellow-500 border-b-2 mb-16 shadow-lg bg-white pl-4">
                <h1 className="font-bebas text-3xl sm:text-4xl lg:text-6xl text-red-600 font-bold">Seja bem-vindo ao nosso cardápio!</h1>
                <p className="font-bebas text-black text-base sm:text-lg lg:text-2xl font-medium">Aqui você encontra um pouco do que há de melhor na nossa hamburgueria, sinta-se à vontade para explorar todas as opções e escolher o que mais lhe agrada.</p>
            </div>
            <div className="flex items-center gap-2 sm:pl-24 mb-5">
                <h3 className="font-bebas text-xl sm:text-2xl">Selecione um filtro: </h3>
                <select 
                    className="px-4 sm:px-5 py-2 outline-none border-gray-400 border rounded-lg shadow-md text-center text-xl sm:text-2xl font-bebas"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <button 
                    className="py-2 px-3 bg-red-600 rounded-lg text-xl sm:text-2xl font-bebas text-white"
                    onClick={() => setFilter(filter)}>
                    Filtrar
                </button>
            </div>
            {filter === "Nenhum" ? (
                <div>
                    <Tradicionais onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    <Especiais onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    <Veganos onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>
                    <Bebidas onPriceChangeSum={handlePriceChangeSum} onPriceChangeSub={handlePriceChangeSub} addToCart={addToCart} removeFromCart={removeFromCart}/>
                </div>
            ) : (
                renderCategory()
            )}
            <Footer/>
            <div ref={scrollFooter}></div>
            <ButtonScrollTop image={Arrow_up}/>
            {isModalOpen && <CartModal onClose={handleModal} total={finalPrice} items={orderItems} removeFromCart={removeFromCart}/>}
        </div>
    );
}

export default Cardapio