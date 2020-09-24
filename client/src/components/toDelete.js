import React from "react";
import axios from "axios";

const ToDelete = ({bike}) => {
    const clickHandler = async () => {
        const data = {...bike}
        console.log(data)
        try {
            const res = await axios.delete(`http://localhost:5000/${data._id}`)
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


