import FancyTitle from "../components/FancyTitle"
import ImageGallery from "../components/ImageGallery"
import Navbar from "../components/NavBar"
import SimpleButton from "../components/SimpleButton"


export default function LandingPage() {
 

images= [{src='../../public/coconut.jpg', row: 20},
{src='../../public/coconut.jpg', row: 20},
{src='../../public/coconut.jpg', row: 20},
{src='../../public/coconut.jpg', row: 20},
{src='../../public/coconut.jpg', row: 20}]
  const openSideBar = ()=> console.log('sidebar open!')
   

  return (
    <>
    <Navbar logo='../../public/logo.svg'
    logoOnClick={openSideBar} button1Link='/login' button1Text='Iniciar sesion' button2Link='/register' button2Text='Comenzar'
    titleLink='/' titleText="Kronos"
    />
    <div className='LandingPage'>
<FancyTitle text='EL TIEMPO ES TUYO' subTitle='Nunca fue tan fácil trabajar en equipo' class='LandingTitle'/>
<SimpleButton text='Empezar' class='EmpezarBtn' link='/register'/>
<FancyTitle text='TODO LO QUE TU EQUIPO NECESITA' class='LandingTitle'/>
<ImageGallery images={images}/>
</div>
    </>
  )
      
}


