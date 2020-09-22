import React from "react";
import axios from "axios";

const ToCancelRent = ({bike}) => {
    const clickHandler = async (e) => {
        const data = {...bike}
        try {
            const res = await axios.delete(`http://localhost:5000/rented/${data._id}`)
            console.log(res.data)
            window.location.reload(false);
        } catch (e) {
            throw new Error(e.message)
        }
    }

    return (
        <button className="btn red waves-effect waves-light col s1" type="button" name="action" onClick={clickHandler}>
            Cancel rent
        </button>
    )
}

export default  ToCancelRent