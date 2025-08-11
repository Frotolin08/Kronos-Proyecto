import SimpleList from "../components/SimpleList";
import ListItem from "../components/ListItem";
export default function ProjectSelectPage(props) {
const projects = [
    {title: 'projecto pokeort',
    subtitle: 'hecho por juan sabio y pipa', 
    buttonContent: 'click',
    link: '/project/1',
    id: 1
},
{
    title: 'mi proyecto',
    subtitle: 'hola como estas', 
    buttonContent: 'click',
    link: '/project/3',
id:2 },
{
    title: 'la chicha',
    subtitle: 'hola como estas', 
    buttonContent: 'click',
    link: '/project/2',
id: 3}
        ]
const listItems = projects.map((item) => (<ListItem key={item.id}Link={item.link} title={item.title} subtitle={item.subtitle} buttonContent={item.buttonContent} buttonOnClick={item.buttonOnClick}/>))
return(
<>
<h1>Select a project</h1>
<SimpleList listTitle='Your Projects:' listContent={listItems}/>

</>


);


}