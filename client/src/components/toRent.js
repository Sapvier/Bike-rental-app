import React from "react";
import axios from "axios";


const ToRent = ({bike}) => {

    const clickHandler = async () => {
        const data = {...bike}
        console.log(data)
        try {
            const res = await axios.post('http://localhost:5000/', data)
            console.log(res.data)
        } catch (e) {
            throw new Error(e.message)
        }
        //'https://react-site-b88f0.firebaseio.com/rentedBikes.json',
        try {
            const res = await axios.delete(`http://localhost:5000/${data.id}.json`)
            console.log(res.data)
            window.location.reload(false);
        } catch (e) {
            throw new Error(e.message)
        }
        //`https://react-site-b88f0.firebaseio.com/bikes/${data.id}.json`
    }


    return (
          <button className="btn blue waves-effect waves-light col s2" type="submit" name="action" style={{marginRight: "1rem"}} onClick={clickHandler}>
               Rent
          </button>
    )
}

export default  ToRent