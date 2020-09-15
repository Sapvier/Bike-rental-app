import React from "react";
import ToCancelRent from "./toCancelRent";

const styles = {
    data: {
        margin: "auto",
        marginRight: "1.5rem"
    },
    box: {
        border: "1px solid lightgrey",
        padding: "1rem",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-around"
    }
}


const UserBike = ({bike}) => {

    return (
        <div style={styles.box}>
            <div style={styles.data}>
                <span>{bike.name} bicycle</span>
                <span> &nbsp; &#47; &nbsp;</span>
                <span>{bike.type}</span>
                <span> &nbsp; &#47; &nbsp;</span>
                <span>${bike.price} per hour</span>
            </div>
            <div style={styles.data}>
                <ToCancelRent bike={bike}/>
            </div>
        </div>

    )
}


export default UserBike