import './css/Service-Card-Landing.css'

export default function ServiceCardLanding(props){
    return(
        <div className="service-card-landing">
            <img src={props.image} alt="" className="service-card-landing" />
            <div className="service-card-landing-content">
                <div className="service-card-landing-title">
                    {props.title}
                </div>
                <div className="service-card-line-separator"></div>
                <p className="service-card-landing-desc">
                    {props.description}
                </p>
            </div>
        </div>
    )
}