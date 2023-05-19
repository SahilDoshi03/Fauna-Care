import './css/Home.css';
import CarouselMain from "../components/Carousel-Main";
import ServiceCardLanding from "../components/Service-Card-Landing";
import doggie from '../assets/doggie.svg';
import adoptLanding from '../assets/adopt-landing.svg';
import fosterLanding from '../assets/foster-landing.svg';
import Footer from '../components/Footer';
import yellowJumper from "../assets/yellow_jumper.svg"
import dogFood from "../assets/dog_food.svg"
import catFood from "../assets/cat_food.svg" 
import ShoppingCardLanding from '../components/ShoppingCardLanding';

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

    const shoppingData = [
        {
            img: dogFood,
            title: "Dog Food",
            cost: "$5",
        },
        {
            img: yellowJumper,
            title: "Yellow Jumper",
            cost: "$15",
        },
        {
            img: catFood,
            title: "Cat Food",
            cost: "$4",
        }
    ]

    const serviceCards = data.map(item => {
        return (
            <ServiceCardLanding
                image = {item.image}
                title = {item.title}
                description = {item.description}
            />
        )
    });

    const shoppingCards = shoppingData.map(item => {
        return(
            <ShoppingCardLanding
                img = {item.img}
                title = {item.title}
                cost = {item.cost}
            />
        )
    })

    return(
        <div className="home">
            <CarouselMain/>
            <section className="service-cards-landing container">
                {serviceCards}
            </section>
            <section className="home-to-recommender-system">
                <div className="home-to-recommender-system-card">
                    <h2>DOG & CAT BREED SELECTOR</h2>
                    <p>Tell us about yourself and discover your ideal DOG or CAT breed!</p>
                    <button className="buttons-primary">Find the breed for you</button>
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
            <section className="shopping-section-landing container">
                <h2 className='shopping-section-title'>Let's do some Shopping!</h2>
                <div className="shopping-title-underline"></div>
                <div className="shopping-cards-landing-container">
                    {shoppingCards}
                </div>
            </section>
            <Footer/>

        </div>
    )
}