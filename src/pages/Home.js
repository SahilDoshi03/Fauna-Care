import './css/Home.css';
import CarouselMain from "../components/Carousel-Main";
import ServiceCardLanding from "../components/Service-Card-Landing";
import doggie from '../assets/doggie.svg';
import adoptLanding from '../assets/adopt-landing.svg';
import fosterLanding from '../assets/foster-landing.svg';
import Footer from '../components/Footer';

export default function Home(){

    const data = [
        {
            image: doggie,
            title: "Health & Advice",
            description: "Are you a new pet parent? Feel free to ask queries and get advice from certified vets"
        },
        {
            image: doggie,
            title: "Health & Advice",
            description: "Are you a new pet parent? Feel free to ask queries and get advice from certified vets"
        },
        {
            image: doggie,
            title: "Health & Advice",
            description: "Are you a new pet parent? Feel free to ask queries and get advice from certified vets"
        },
    ]

    const serviceCards = data.map(item => {
        return (
            <ServiceCardLanding
                image = {item.image}
                title = {item.title}
                description = {item.description}
            />
        )
    })

    return(
        <div className="home">
            <CarouselMain/>
            <section className="service-cards-landing container">
                {serviceCards}
            </section>
            <section className="adopt-section-landing container">
                <img src={adoptLanding} alt="" />
                <div className="adopt-section-content-landing">
                    <button className='buttons-primary'>Adopt a pet?</button>
                    <p className="adopt-section-description-landing">
                        Find your pawfect friend here. 
                        We’ll recommend the best suitable breeds for you.
                    </p>
                </div>
            </section>
            <section className="foster-section-landing container">
                <div className="foster-section-content-landing">
                    <button className='buttons-primary foster-section-button-landing'>Be a Foster Parent?</button>
                    <p className="foster-section-description-landing">
                        Love pets but can’t adopt one? We got you! 
                        You can register as foster parent and make furry friends and take care of them.
                    </p>
                </div>
                <img src={fosterLanding} alt="" />
            </section>
            <Footer/>

        </div>
    )
}