import "./css/RecommendationQuestions.css"
import Slider from '@mui/material/Slider';

export default function RecommendationQuestions(props){
    return(
        <div className="recommendation-questions">
            <div className="questions">
                {props.question}
            </div>
            <div className="options">
                <label className="single-option">
                    <input type="radio" name="owner-preference" value="1"/>
                    {props.options[0]}
                </label>
                <label className="single-option">
                    <input type="radio" name="owner-preference" value="2"/>
                    {props.options[1]}
                </label>
                <label className="single-option">
                    <input type="radio" name="owner-preference" value="3"/>
                    {props.options[2]}
                </label>
                <label className="single-option">
                    <input type="radio" name="owner-preference" value="4"/>
                    {props.options[3]}
                </label>
                <label className="single-option">
                    <input type="radio" name="owner-preference" value="5"/>
                    {props.options[4]}
                </label>
            </div>
            <div className="question-importance">
            <Slider
                className="importance-slider"
                aria-label="Temperature"
                defaultValue={1}
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={10}
            />
            </div>
        </div>
    )
}