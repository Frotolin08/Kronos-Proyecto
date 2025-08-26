import FancyTitle from "../components/FancyTitle"
import ImageGallery from "../components/ImageGallery"
import Navbar from "../components/NavBar"
import SimpleButton from "../components/SimpleButton"
import Footer from "../components/Footer"

export default function LandingPage() {
 

const images= [{src:'../../public/coconut.jpg', row: 20},
{src:'../../public/coconut.jpg', row: 20},
{src:'../../public/coconut.jpg', row: 30},
{src:'../../public/coconut.jpg', row: 40},
{src:'../../public/coconut.jpg', row: 50}]
  const openSideBar = ()=> console.log('sidebar open!')
   

  return (
    <>
    <Navbar 
    logoOnClick={openSideBar} button1Link='/login' button1Text='Iniciar sesion' button2Link='/register' button2Text='Comenzar'
    titleLink='/' 
    />
    <div className='LandingPage'>
<FancyTitle text='EL TIEMPO ES TUYO' subTitle='Nunca fue tan fácil trabajar en equipo' class='LandingTitle'/>
<SimpleButton text='Empezar' class='EmpezarBtn' link='/register'/>
<FancyTitle text='TODO LO QUE TU EQUIPO NECESITA' class='LandingTitle'/>
<ImageGallery images={images}/>
</div>
<Footer/>
    </>
  )
      
}


