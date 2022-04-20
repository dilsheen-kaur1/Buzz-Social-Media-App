import { useState } from 'react'
import './InputBox.css'

function InputBox(props) {
    const {
        name,
        type,
        id,
        values,
        onchange,
        onblurr
    } = props
    const [gender, setGender] = useState('female')
    return (
        <>
            {id === 'gender' ?
                <div className='profile-input d-flex flex-column me-5'>
                    <label htmlFor={id} className='mb-3'>{name}</label>
                    <div className='p-3 d-flex gender-input '>
                        <div className={gender === 'female' ? 'active' : null} onClick={() => setGender('female')}>Female</div>
                        <div className={gender === 'male' ? 'active' : null} onClick={() => setGender('male')}>Male</div>
                    </div>
                </div>
                : id === "stateAddress" ?
                    <div className="profile-input d-flex flex-column me-5">
                        <label htmlFor={id} className='mb-3'>{name}</label>
                        <select className="form-select state-list" aria-label="Default select example">
                            <option value="Delhi">Delhi</option>
                            <option value="Punjab">Punjab</option>
                            <option value="UP">UP</option>
                        </select>
                    </div>
                    :
                    <div className='profile-input d-flex flex-column me-5'>
                        <label htmlFor={id} className='mb-3'>{name}</label>
                        <input
                            type={type}
                            id={id}
                            placeholder={name}
                            style={{ color: type === "date" ? '#e5e5e5' : null }}
                            min={type === "number" ? "100000" : null}
                            max={type === "number" ? "999999" : type === "date" ? "2004-01-01" : null}
                            value={values}
                            onChange={onchange}
                            onBlur={onblurr}
                            onKeyDown={type === 'date' ? (e) => e.preventDefault() : null} />
                    </div>
            }
                {/* if(id==="firstName") {
                    formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null
                } */}
        </>
    )
}

export default InputBox