import React, {useEffect, useState} from "react";
import axios from "axios"
import UserBike from "./UserBike";

const styles = {
    data: {
        margin: "auto"
    },
    box: {
        border: "1px solid lightgrey",
        padding: "1rem",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between"
    }
}

const UserRentList = () => {
    const [rented, setRented] = useState( []);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                'https://react-site-b88f0.firebaseio.com/rentedBikes.json',
            );
            if (result.data) {
                const payload = Object.keys(result.data).map(key => {
                    return {
                        ...result.data[key],
                        id: key
                    }
                })
                setRented(payload);
            }
            else setRented([])

        }
        fetchData();
    }, []);

    const listItems = rented.map(bike =>
        <UserBike bike={bike} />
    );
    let totalPrice = 0;
    for(let i = 0; i < rented.length; i++) {
        totalPrice = +totalPrice + +rented[i].price
    }



    if (rented.length)
        return (
            <div>
                <h5>Your Rent (Total: ${totalPrice})</h5>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    else return <div style={styles.box}>
        <h5 style={styles.data}>You didn't rent any bikes &#128542;</h5>
    </div>

}

export default UserRentList