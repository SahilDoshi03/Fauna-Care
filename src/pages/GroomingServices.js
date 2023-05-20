import './css/GroomingServices.css'
import groomingMain from '../assets/groomingMain.svg'
import Footer from '../components/Footer.js'
import ServiceCardGrooming from '../components/ServiceCardGrooming'
import bathingImg from '../assets/bathing.svg'
import haircut from '../assets/haircut.svg'
import nailtrimming from '../assets/nailtrimming.svg'
import teethcleaning from '../assets/teethcleaning.svg'
import walking from '../assets/walking.svg'
import eareye from '../assets/eareye.svg'
import GroomerCard from '../components/GroomerCard'
import groomer from '../assets/groomer.svg'
import groomer1 from '../assets/groomer1.svg'
import groomer2 from '../assets/groomer2.svg'

export default function GroomingServices(){

    const serviceData = [
        {
            img: bathingImg,
            title: "Bathing",
        },
        {
            img: haircut,
            title: "Hair Cut",
        },
        {
            img: eareye,
            title: "Ear & Eye Cleaning",
        },
        {
            img: nailtrimming,
            title: "Nail Trimming",
        },
        {
            img: teethcleaning,
            title: "Teeth Cleaning",
        },
        {
            img: walking,
            title: "Walking & Training",
        }
    ]

    const groomersData = [
        {
            img: groomer,
            name: "Phoebe Buffay",
            job: "Nail Trimmer"
        },
        {
            img: groomer1,
            name: "Chandler Bing",
            job: "Trainer"
        },
        {
            img: groomer2,
            name: "Rachel Green",
            job: "Hair Stylist"
        }
    ]

    const serviceCardGrooming = serviceData.map((item) => {
        return(
            <ServiceCardGrooming
                img = {item.img}
                title = {item.title}
            />
        )
    })

    const groomerCard = groomersData.map((item) => {
        return(
            <GroomerCard
                img = {item.img}
                name = {item.name}
                job = {item.job}
            />
        )
    })

    return(
        <div className="grooming-services">
            <section className="appointment-section-grooming container">
                <div className="appointment-section-content-grooming">
                    <h5 className="appointment-section-title-grooming">
                        Helping you to take better care of your pets
                    </h5>
                    <p className="appointment-section-description-grooming">Caring for little companions</p>
                    <button className='buttons-primary'>Make Appointment</button>
                </div>
                <img src={groomingMain} alt="" />
            </section>
            <section className="services-section-grooming container">
                {serviceCardGrooming}
            </section>
            <section className="team-section-grooming container">
                <h2 className="team-section-grooming-title">OUR TEAM</h2>
                <h3 className="team-section-grooming-title-sec">Meet Our Groomers</h3>
                <div className="groomers-list">
                    {groomerCard}
                </div>
            </section>
            <Footer/>
        </div>
    )
}