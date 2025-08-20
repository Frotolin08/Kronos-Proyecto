import Navbar from "../components/NavBar"


export default function LandingPage() {
 
  const openSideBar = ()=> console.log('sidebar open!')
   

  return (
    <>
    <Navbar logo='../../public/logo.svg'
    logoOnClick={openSideBar} button1Link='/login' button1Text='Iniciar sesion' button2Link='/register' button2Text='Comenzar'
    titleLink='/' titleText="Kronos"
    />
    </>
  )
      
}


