
import { FiEdit3 } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
export const MyMeals = ({text, updatingInput, deleteMeal}) =>{
    return(
        <div>
            <p>{text}</p>
            <FiEdit3 onClick={updatingInput} />
            <AiTwotoneDelete onClick={deleteMeal}/>

        </div>
    )
}