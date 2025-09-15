import { useParams } from "react-router";
import Navbar from "../components/NavBar";
import ErrorPage from "./ErrorPage";


export default function(props) {

const params = useParams();
return(
params.id? <Navbar/> : <ErrorPage/>
)
}