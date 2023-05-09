import "./css/BreedRecommender.css"
import RecommendationQuestions from "../components/RecommendationQuestions"

export default function BreedRecommender(){

    const data = [
        {
            id: 1,
            question: "How much lonely will your pet be?(weekly)",
            options: [1,2,3,4,5]
        },
        {
            id: 2,
            question: "How much lonely will your pet be?(weekly)",
            options: [1,2,4,4,5]
        }
    ]

    const questions = data.map((item) => {
        return(
            <RecommendationQuestions
                key = {item.id}
                question={item.question}
                options={item.options}
            />
        )
    })
    
    function handleSubmit(e){
        e.preventDefault()
        const form = e.target
        // const formData = new FormData(form)
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
    }

    return(
        <div className="breed-recommender container">
            <form className="recommendation-questions-form" onSubmit={handleSubmit}>
                {questions}
                <button type="submit"className="recommendation-submit buttons-primary">Submit</button>
            </form>
        </div>
    )
}