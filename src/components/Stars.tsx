import { ICounter } from "../models"
import Star from "./Star"


export const Stars = ({ count }: ICounter) => {
    // console.log(count)
    const stars = []
    if (count >= 1 && count <= 5) {
        for (let i = 1; i <= count; i++) {
            stars.push(i)
        }
    }

    return (

        <ul className="card-body-stars u-clearfix">
            {stars.map((i) => {
                return <Star key={i} />
            })}
        </ul>
    )

}

export default Stars
