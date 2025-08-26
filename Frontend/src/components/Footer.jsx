import LogoWText from "./LogoWText";

export default function Footer(props) {

return(
<div className='footer'>
    <div className='topLine'/>
    <div className='FooterBox'>
<LogoWText titleLink='/'/>

    </div>
<div className='FooterIcons'>
    <a target='_blank' href='https://instagram.com'><img src='../public/instagramlogo.svg'/></a>
    <a target='_blank' href='https://linkedin.com'><img src='../public/linkedinlogo.svg'/></a>
    <a target='_blank' href='https://youtube.com'><img src='../public/youtubelogo.svg'/></a>
</div>

    </div>
)

}