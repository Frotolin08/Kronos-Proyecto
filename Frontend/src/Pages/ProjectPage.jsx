import { useParams } from "react-router";
import NavBarWSearch from "../components/NavBarWSearch";
import SideBar from "../components/SideBar";
import ErrorPage from "./ErrorPage";


export default function(props) {

const params = useParams();
return(
params.id? <>
<NavBarWSearch/>
<SideBar/>
</> : <ErrorPage/>
)
}