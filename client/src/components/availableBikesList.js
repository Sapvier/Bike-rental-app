import React, {useEffect, useState} from "react";
import axios from "axios"
import AvailableBike from "./availableBike";

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

const AvailableBikesList = () => {
    const [data, setData] = useState( []);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                'https://react-site-b88f0.firebaseio.com/bikes.json',
            );
            if (result.data) {
                const payload = Object.keys(result.data).map(key => {
                    return {
                        ...result.data[key],
                        id: key
                    }
                })
                setData(payload);
            }
            else setData([])

        }
        fetchData();
    }, []);

    const listItems = data.map(bike =>
        <AvailableBike bike={bike} />
    );


    if (data.length)
    return (
        <div>
            <h5>Available bicycles ({listItems.length})</h5>
            <ul>
                {listItems}
            </ul>
        </div>
    )
    else return <div style={styles.box}>
        <p style={styles.data}>No bikes available &#128542;</p>
    </div>

}

export default AvailableBikesList
