import './css/GroomerCard.css'

export default function GroomerCard(props){
    return(
        <div className="groomer-card">
            <img src={props.img} alt="" />
            <div className="groomer-card-name">{props.name}</div>
            <div className="groomer-card-job">{props.job}</div>
        </div>
    )
}