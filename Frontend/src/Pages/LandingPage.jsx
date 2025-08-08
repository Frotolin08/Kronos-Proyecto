import RouteSelector from "../components/RouteSelector";


export default function LandingPage() {
 
const routes = ['/', '/home','/login','/register','*','/projects']
  return (
    <>
    <h1>landing page</h1>
    <RouteSelector routes={routes}/>
    </>
  )
      
}


