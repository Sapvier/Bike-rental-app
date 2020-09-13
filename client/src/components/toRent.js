import React from "react";
import axios from "axios";


const ToRent = ({bike}) => {

    const clickHandler = async () => {
        const data = {...bike, rented: true}
        console.log(data)
        try {
            const res = await axios.post('https://react-site-b88f0.firebaseio.com/rentedBikes.json', data)
            console.log(res.data)
        } catch (e) {
            throw new Error(e.message)
        }
        try {
            const res = await axios.delete(`https://react-site-b88f0.firebaseio.com/bikes/${data.id}.json`)
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