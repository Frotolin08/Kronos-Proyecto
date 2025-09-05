export default function ImageGallery(props) {
const images = props.images
return(

<div className='gallery'>
{images.map(image=> <img src={image.src} key={image.id} style={{'--rows': image.row}}/>)}
</div>

)


}