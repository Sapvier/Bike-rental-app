import React from "react";
import axios from "axios";

const ToCancelRent = ({bike}) => {
    const clickHandler = async () => {
        const data = {...bike}
        console.log(data)
        try {
            const res = await axios.delete(`http://localhost:5000/`, {params: {id: data.id}})
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