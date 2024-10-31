import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import Hamburguer_logo from '../assets/hamburguer_logo.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import hamburguer2 from '../assets/hamburguer2.png'
import hamburguer3 from '../assets/hamburguer3.png'
import hamburguer4 from '../assets/hamburguer4.png'
import FoodTruck from '../assets/food_truck.jpg'
import Arrow from '../assets/arrow.svg'
import Arrow_up from '../assets/arrow_up.svg'
import Cardapio_print from '../assets/cardapio_print.png'
import Footer from '../components/Footer.jsx'
import ButtonScrollTop from '../components/ButtonScrollTop'
import { FaFire } from 'react-icons/fa'


function Home() {
  const slides = [hamburguer3, hamburguer2, hamburguer4]
  const scrollAbout = useRef()
  const scrollTop = useRef()
  const scrollMenu = useRef()
  const scrollFooter = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToAbout = () => {
    scrollAbout.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    scrollTop.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToMenu = () => {
    scrollMenu.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFooter = () => {
    scrollFooter.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full">
      <div ref={scrollTop}></div>
      <header className="fixed bg-red-600 w-full sm:px-7 flex items-center gap-3 justify-around z-10 h-24">
      <div className='flex items-center gap-3'>
        <img src={Hamburguer_logo} alt="Logo Hamburguer" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-bebas tracking-wider pt-2">
          Hamburgueria NoPonto
        </h1>
      </div>
      <ul className='hidden lg:flex gap-2 sm:gap-5 md:gap-12 text-xl md:text-2xl lg:text-3xl text-white font-bebas h-full items-center'>
        <li className='cursor-pointer hover:border-b-8 hover:border-white h-full flex items-center transition-all duration-200' onClick={scrollToTop}>
          Home
        </li>
        <li className='cursor-pointer hover:border-b-8 hover:border-white h-full flex items-center transition-all duration-200' onClick={scrollToAbout}>
          Sobre Nós
        </li>
        <li className='cursor-pointer hover:border-b-8 hover:border-white h-full flex items-center transition-all duration-200' onClick={scrollToMenu}>
          Cardápio
        </li>
        <li className='cursor-pointer hover:border-b-8 hover:border-white h-full flex items-center transition-all duration-200' onClick={scrollToFooter}>
          Contato
        </li>
      </ul>
      <button className="lg:hidden text-white text-3xl focus:outline-none" onClick={handleMenuOpen}>
        &#9776;
      </button>
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-red-600 text-white text-lg font-bebas shadow-lg lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className='cursor-pointer hover:scale-105 transition-all duration-200' onClick={() => { scrollToTop(); handleMenuOpen(); }}>
              Home
            </li>
            <li className='cursor-pointer hover:scale-105 transition-all duration-200' onClick={() => { scrollToAbout(); handleMenuOpen(); }}>
              Sobre Nós
            </li>
            <li className='cursor-pointer hover:scale-105 transition-all duration-200' onClick={() => { scrollToMenu(); handleMenuOpen(); }}>
              Cardápio
            </li>
            <li className='cursor-pointer hover:scale-105 transition-all duration-200' onClick={() => { scrollToFooter(); handleMenuOpen(); }}>
              Contato
            </li>
          </ul>
        </div>
      )}
    </header>
      <div className='pt-20 border-b-4 border-yellow-400 shadow-2xl'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          className="lg:h-[65vh] shadow-2xl"
        >
          {slides.map(slide => (
            <SwiperSlide key={slide}>
              <div className="flex justify-center items-center h-full">
                <img
                  src={slide}
                  alt={slide}
                  className="w-full max-h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <main className='px-3 sm:px-10 md:px-20'>
        <div className='w-full text-center mb-10'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl font-bebas font-bold text-red-600 flex items-center justify-center mt-16 flex-col'>
        Seja muito bem-vindo <span>à</span>
        <div ref={scrollAbout}></div>
            <span className='flex items-center ml-1'>hamburgueria NoPonto! <FaFire className="ml-2 pb-2 text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" /></span>
          </h1>
        </div>
        <section className='bg-gray-200 rounded-2xl p-8 shadow-xl mb-16'>
          <div className='border-b-yellow-500 border-b-4 mb-6'>
            <h2 className='font-bebas text-4xl sm:text-5xl text-red-600 font-bold ml-8'>
              Nossa História
            </h2>
          </div>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='md:w-2/3 text-left'>
              <p className='text-black sm:text-lg font-medium leading-6'>
                A <strong>Hamburgueria NoPonto</strong> nasceu do sonho de dois amigos, apaixonados por boa comida e momentos de descontração. Tudo começou em 2015, quando Carlos e João, após uma longa viagem pelos Estados Unidos, se encantaram com a autenticidade dos hambúrgueres artesanais. Determinados a trazer para o Brasil a experiência de um hambúrguer suculento, com ingredientes frescos e preparados com carinho, decidiram transformar essa paixão em um negócio.
              </p>
              <p className='mt-4 text-black sm:text-lg font-medium leading-6'>
                No início, era apenas uma pequena <strong>food truck</strong> estacionada em uma praça local, onde os amigos preparavam hambúrgueres para moradores do bairro. O sucesso foi imediato: o sabor, a qualidade e o atendimento acolhedor logo se espalharam pela cidade, e a NoPonto ganhou sua primeira loja física em menos de um ano.
              </p>
              <p className='mt-4 text-black sm:text-lg font-medium leading-6'>
                Hoje, nossa missão é proporcionar uma experiência gastronômica que vai além do simples ato de comer. Cada hambúrguer é feito com ingredientes selecionados e receitas exclusivas. Mais do que uma hamburgueria, somos um lugar para reunir amigos, celebrar conquistas e criar memórias. Venha fazer parte da nossa história!
              </p>
            </div>
            <div className='md:w-1/3 flex justify-center mt-8 md:mt-0'>
              <img src={FoodTruck} alt="Food Truck" className='opacity-0 lg:opacity-100 w-0 lg:w-3/5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300' />
            </div>
          </div>
          <div ref={scrollMenu}></div>
        </section>
        <section className='flex flex-col gap-5 mb-16'>
          <div className='border-b-yellow-500 border-b-2'>
            <h2 className='font-bebas text-4xl sm:text-5xl md:text-6xl text-red-600 font-bold ml-8'>Está com fome?</h2>
            <p className='font-bebas text-black text-xl sm:text-2xl font-medium ml-8'>Confira nosso cardápio e as promoções disponíveis!</p>
          </div>
          <img src={Cardapio_print} alt="Print da página do cardápio" className='opacity-30' />
          <Link to="/cardapio" state={{ scrollToTop: true }}>
            <button className='font-bebas text-white bg-red-600 w-full py-3 text-2xl sm:text-4xl rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3'>Clique aqui para acessar o cardápio
              <img src={Arrow} alt="Ícone de flecha" className='w-10 mb-1' />
            </button>
          </Link>
        </section>
      </main>
      <Footer />
      <div ref={scrollFooter}></div>
      <ButtonScrollTop image={Arrow_up} />
    </div>
  )
}

export default Home
