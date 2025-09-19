import { useParams } from "react-router";
import { useState } from "react";
import NavBarWSearch from "../components/NavBarWSearch";
import SideBar from "../components/SideBar";
import ErrorPage from "./ErrorPage";
import ProjectPageContent from "../components/ProjectPageContent";


export default function ProjectPage() {
const [sbStatus, setSbStatus] = useState(false)

const style = {left : sbStatus?  '-100%' : '0px'}

const params = useParams();
return(
params.id? <>
<NavBarWSearch menuFunc={() => setSbStatus(!sbStatus)}/>
<SideBar style={style}/>
<ProjectPageContent SbOpen={sbStatus    }/>
</> : <ErrorPage/>
)
}