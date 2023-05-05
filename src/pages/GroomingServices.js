import './css/GroomingServices.css'
import groomingMain from '../assets/groomingMain.svg'

export default function GroomingServices(){
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
        </div>
    )
}