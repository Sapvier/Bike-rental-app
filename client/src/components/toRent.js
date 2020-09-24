import React from "react";
import axios from "axios";


const ToRent = ({bike}) => {

    const clickHandler = async () => {
        const data = {...bike, rented: true}
        console.log(data)
        try {
            const res = await axios.post(`http://localhost:5000/${data._id}`, data)
            console.log(res.data)
        } catch (e) {
            throw new Error(e.message)
        }
        try {
            const res = await axios.delete(`http://localhost:5000/${data._id}`)
            console.log(res.data)
        } catch (e) {
            throw new Error(e.message)
        }
    }


    return (
          <button className="btn blue waves-effect waves-light col s2" type="submit" name="action" style={{marginRight: "1rem"}} onClick={clickHandler}>
               Rent
          </button>
    )
}

export default  ToRent