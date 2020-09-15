import React from "react";
import ToDelete from "./toDelete";
import ToRent from "./toRent";

const styles = {
    data: {
        margin: "auto"

    },
    box: {
        border: "1px solid lightgrey",
        padding: "1rem",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-around"
    }
}

const AvailableBike = ({bike}) => {

    return (
        <div style={styles.box}>
            <div style={styles.data}>
                 <span >{bike.name} bicycle</span>
                 <span> &nbsp; &#47; &nbsp;</span>
                 <span>{bike.type}</span>
                 <span> &nbsp; &#47; &nbsp;</span>
                 <span>${bike.price} per hour</span>
            </div>
            <div >
            <ToRent bike={bike}/>
            <ToDelete bike={bike}/>
            </div>
        </div>

    )
}

export default AvailableBike