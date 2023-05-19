import './css/ShoppingCardLanding.css'

export default function ShoppingCardLanding(props){
    return(
        <div className="shopping-card-landing">
            <img src={props.img} alt="" />
            <div className="shopping-card-landing-title">{props.title}</div>
            <div className="shopping-card-landing-price">{props.cost}</div>
        </div>
    )
}