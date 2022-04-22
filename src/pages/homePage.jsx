import NavBar from "../components/menuBar"
import imageDesktop from '../imagesSvg/image-hero-desktop.png'


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
        </>
    )
}

export default HomePage