import { useState } from "react";

import AddSteak from "../components/AddSteak";
import ReviewForm from "../components/ReviewForm";

function NewSteak(){

    const [steak, setSteak] = useState("");
    
    return (
        <>
            {steak ? (
                <>
                    <h3 className="review-h3">Review {steak.restaurant}</h3>
                    <ReviewForm steak={steak}/>
                </>
            ) : (
                <>
                    <h3 className="review-h3">Gimme Steak</h3>
                    <AddSteak setSteak={setSteak} />
                </>
            )}
        </>
    )
}

export default NewSteak;