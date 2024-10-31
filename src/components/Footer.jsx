import Phone from '../assets/phone.svg'
import Email from '../assets/email.svg'
import Location from '../assets/location.svg'


function Footer(){
    return(
        <div className='absolute w-full left-0 bg-gray-500'>
        <footer className='bg-gray-500 text-white p-8'>
        <h2 className='font-bebas text-4xl text-center mb-6 border-b-white border-b-2'>Fale conosco!</h2>
        <ul className='flex flex-col gap-4 text-xl font-medium items-center'>
          <li className='flex items-center gap-2'>
            <img src={Phone} alt="Ícone de Telefone" />
            <span>(11) 99999-9999</span>
          </li>
          <li className='flex items-center gap-2'>
            <img src={Email} alt="ícone de email" />
            <span>contato@hamburguerianoponto.com</span>
          </li>
          <li className='flex items-center gap-2'>
            <img src={Location} alt="Ícone de localização" />
            <span>Rua dos Hambúrgueres, 123</span>
          </li>
        </ul>
      </footer>
        </div>
    )
}

export default Footer