import RouteSelector from "../components/RouteSelector";


export default function LandingPage() {
 
const routes = ['/', '/home','/login','/register','*']
  return (
    <>
    <h1>Hello World</h1>
    <RouteSelector routes={routes}/>
    </>
  )
      
}


