import Navbar from "../components/NavBar"


export default function LandingPage() {
 
  const openSideBar = ()=> console.log('sidebar open!')
   

  return (
    <>
    <Navbar logo='../../public/coconut.jpg'
    logoOnClick={openSideBar} button1Link='/login' button1Text='Log In' button2Link='/register' button2Text='Get Started'/>
    </>
  )
      
}


