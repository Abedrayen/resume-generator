import React from 'react'

const InputItems = ({ label, placeholder = '', name, onChange, type = 'text', isTextArea = false, className }) => {
    return (
        <div>
            {!isTextArea ? <input onChange={onChange} placeholder={placeholder} name={name} type={type} />
                : <textarea onChange={onChange} placeholder={placeholder} name={name}></textarea>}
        </div>
    )
}

export default InputItems
