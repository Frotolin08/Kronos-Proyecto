export default function ImageGallery(props) {
const images = props.images
return(

<div className='gallery'>
{images.map(image=> <img href={image.src} key={image.src} style={{'--rows': image.row}}/>)}
</div>

)


}