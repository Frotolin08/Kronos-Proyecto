import { useParams } from "react-router";
import SimpleList from "../components/SimpleList";


export default function(props) {

const params = useParams();
let fetch 
if(params.id=='1') {
  fetch  = {title: 'pokeort', 
        members: ['sabio','pipa','pirolo','marabi'],
    subtitle: 'pokemon pero en ort'
    }
}
const listContent = fetch && fetch.members.map((member) => <li key={member}>{member}</li>)
return(
<>
<h1 className="title">{fetch? fetch.title: 'title' }</h1>
<h2 className="subtitle">{fetch? fetch.subtitle: 'subtitle' }</h2>
<SimpleList listTitle='Members' listContent={listContent}/>
</>
)

}