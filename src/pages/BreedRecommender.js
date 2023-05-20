import "./css/BreedRecommender.css"
import RecommendationQuestions from "../components/RecommendationQuestions"

export default function BreedRecommender(){

    const data = [
        {
            id: 1,
            question: "How much time will your dog be spending alone ?",
            options: ['There will be someone at home all the time','There will be someone at home most of the time','Only about 4 hours at a time','About 5-6 hours at a time ','My dog should be fine by himself for at least 8 hours']
        },
        {
            id: 2,
            question: "What is the coolest temperature in your vicinity ?",
            options: ['Above 15 degrees','10-15 degress','5-10 degrees','0-5 degrees','Below 0 degree']
        },
        {
            id: 3,
            question: "What is the highest temperature in your vicinity ?",
            options: ['Below 30 degrees','30-35 degrees','35-40 degrees','40-45 degrees','Above 45 degrees']
        },
        {
            id: 4,
            question: "What size dog do you want ?",
            options: ['Extra small','Small','Medium','Large','Extra Large ']
        },
        {
            id: 5,
            question: "How adaptable should your dog be with surrounding ?",
            options: ['Not adaptable','sometimes adaptable','Tries to adapt','Moderately adaptable','Highly adaptable']
        },
        {
            id: 6,
            question: "What kind of house do you have ?",
            options: ['small appartment with no yard','Appartment with yard','House with no yard','House with a park nearby','Standalone house with yard']
        },
        {
            id: 7,
            question: "How much will your dog be able to play with you ?",
            options: ['No time to play','Only indoor playtime','Occasional walks','A short walk or background play','Daily walks and jogs']
        },
        {
            id: 8,
            question: "How frequently can you care for your dog’s grooming needs ?",
            options: ['Twice a month','Monthly','Every week','Two to three times a week','Every day']
        },
        {
            id: 9,
            question: "How often will you take your dog for a check up ?",
            options: ['Twice a month','Once in a month','Once in 3 months','Once in 6 months','Only in case of Emergency']
        },
        {
            id: 10,
            question: "How much coat shedding can you deal with ?",
            options: ['I want a dog that doesn’t shed','I prefer a very little shedding','I prefer shedding sometimes','Average shedding is fine','Highly shedding doesn’t bother me']
        },
        {
            id: 11,
            question: "How much lonely will your pet be?(weekly)",
            options: ['Highly protective','Moderately protective ',' Fairly friendly with strangers',' Friendly with strangers','Loves Everyone']
        },
        {
            id: 12,
            question: "How trainable do you want your dog to be ?",
            options: ['May be stubborn','Less-easily trainable','Trainable','Easily trainable','Highly trainable']
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
        // const form = e.target
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