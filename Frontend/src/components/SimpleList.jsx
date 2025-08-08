
export default function SimpleList(props) {

return(
   
    <div className="listBody"> <h1>{props.listTitle}</h1>
    <div className="listItems">{props.listContent}</div>
    </div>
)

}