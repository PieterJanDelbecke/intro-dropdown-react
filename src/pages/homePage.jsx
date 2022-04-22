import NavBar from "../components/menuBar"
import imageDesktop from '../imagesSvg/image-hero-desktop.png'
import databizImg from '../imagesSvg/client-databiz.svg'
import audiophileImg from '../imagesSvg/client-audiophile.svg'
import meetImg from '../imagesSvg/client-meet.svg'
import makerImg from '../imagesSvg/client-maker.svg'


const HomePage = () => {
    return (
        <>  
            <NavBar />
            <h1>Make remote work home</h1>
            <p>
                Get your team in sync, no matter your location.
                Streamline processes, create tean rituals, and watch productivity.
            </p>
            <img src={imageDesktop} alt='desktop' />
            <button>Learn More</button>
            <img src={databizImg} alt='databix' />
            <img src={audiophileImg} alt='audiophile' />
            <img src={meetImg} alt='meet' />
            <img src={makerImg} alt='maker' />

        </>
    )
}

export default HomePage