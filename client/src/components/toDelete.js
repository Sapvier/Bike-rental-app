import React from "react";
import axios from "axios";

const ToDelete = ({bike}) => {
    const clickHandler = async () => {
        const data = {...bike, rented: true}
        console.log(data)
        try {
            const res = await axios.delete(`https://react-site-b88f0.firebaseio.com/bikes/${data.id}.json`)
            console.log(res.data)
        } catch (e) {
            throw new Error(e.message)
        }
    }

    return (
        <button className="btn red waves-effect waves-light col s1" type="button" name="action" onClick={clickHandler}>
            Delete
        </button>
    )
}

export default  ToDelete


