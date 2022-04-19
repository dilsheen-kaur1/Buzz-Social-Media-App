import { useState } from 'react'
import './InputBox.css'

function InputBox(props) {
    const {
        name,
        type,
        id
    } = props
    const [gender,setGender] = useState('female')
    return (
        <>
            {id === 'gender' ? <div className='profile-input  d-flex flex-column me-5'>
            <label htmlFor={id} className='mb-3'>{name}</label>
            <div className='p-3 d-flex gender-input '>
                <div className={gender==='female' ? 'active': null} onClick={()=>setGender('female')}>Female</div>
                <div className={gender==='male' ? 'active': null} onClick={()=>setGender('male')}>Male</div>
            </div>
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
                        max={type === "number" ? "999999" : null} />
                </div>
            }
        </>
    )
}

export default InputBox