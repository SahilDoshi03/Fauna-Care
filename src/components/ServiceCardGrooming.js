import './css/ServiceCardGrooming.css'

export default function ServiceCardGrooming(props){
    return(
        <div className="service-card-grooming">
            <img src={props.img} alt=""/>
            <div className="service-card-grooming-title">{props.title}</div>
        </div>
    )
}