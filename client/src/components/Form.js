import React, {useState} from "react";
import axios from "axios"

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        type: '',
        price: ''
        })

    const changeHandler = event => {
        setForm({...form, [event.target.id]: event.target.value})
        console.log(form.name)
    }

    const submitHandler = async (e)=> {
        e.preventDefault()
        const data = {...form}
        try {
            const res = await axios.post('http://localhost:5000/', data)
            console.log(res.data)
            setForm({
                name: '',
                type: '',
                price: ''
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
    return (
        <div>
            <div className="row">
                <form className="col s12" style={{background: "lightgrey"}} onSubmit={submitHandler}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="name" name="name" type="text" className="validate" value={form.name} onChange={changeHandler}/>
                                <label htmlFor="icon_prefix">Bike name</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="price" type="number" name="price" className="validate" value={form.price} onChange={changeHandler}/>
                            <label htmlFor="price">Rental price, $</label>
                        </div>
                        <div className="input-field col s3">
                                <select className="browser-default" id="type" name="type" value={form.type} onChange={changeHandler}>
                                    <option value={""} disabled>Choose bike type</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Crossroad">Crossroads</option>
                                    <option value="Track">Track</option>
                                </select>
                        </div>
                        <button className="btn waves-effect waves-light col s1" style={{marginTop: "1.5rem"}} type="submit" name="action">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form