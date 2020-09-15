import React from "react";
import axios from "axios";

const ToCancelRent = ({bike}) => {
    const clickHandler = async () => {
        const data = {...bike, rented: true}
        console.log(data)
        try {
            const res = await axios.delete(`http://localhost:5000/`)
            console.log(res.data)
            window.location.reload(false);
        } catch (e) {
            throw new Error(e.message)
        }
        //`https://react-site-b88f0.firebaseio.com/rentedBikes/${data.id}.json`
    }

    return (
        <button className="btn red waves-effect waves-light col s1" type="button" name="action" onClick={clickHandler}>
            Cancel rent
        </button>
    )
}

export default  ToCancelRent