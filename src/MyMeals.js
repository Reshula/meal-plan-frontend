import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
export const MyMeals = ({text, updatingInput, deleteMeal}) =>{
    return(
        <div>
            <p>{text}</p>
            <CiEdit onClick={updatingInput} />
            <AiOutlineDelete onClick={deleteMeal}/>

        </div>
    )
}