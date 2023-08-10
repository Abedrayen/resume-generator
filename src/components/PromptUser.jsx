import React from 'react'
import { useNavigate, Link } from 'react-router'
import InputItems from './InputItems'
import { HiArrowRight } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GiAges } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import 'animate.css'
import Resume from './Resume'
const PromptUser = ({ handleChange, imageSource, OnButtonClick, userObject }) => {
    const navigate = useNavigate()
    const onButtonClick = () => {
        alert(`WINDOWS DIMENSION: ${window.innerWidth}, ${window.innerHeight}`)
        navigate('/resume')
    }
    return (
        <>
            {OnButtonClick ? <Resume userObject={userObject} imageSource={imageSource} /> : <div className='prompt-container animate__animated animate__bounce' >
                <div className='inputs'>
                    <InputItems className='first-name' onChange={handleChange} label='First Name' placeholder='Enter your first name' name='firstName' />
                    <InputItems className='last-name' onChange={handleChange} label='Last Name' placeholder=' Enter your last name' name='lastName' />
                    <InputItems className='email' onChange={handleChange} label={<AiOutlineMail />} placeholder='Enter your email' name='email' />
                    <InputItems className='phone' onChange={handleChange} label={<BsTelephone />} placeholder='Enter your phone number' name='phoneNumber' />
                    <InputItems className='website' onChange={handleChange} label={<CgWebsite />} placeholder='Enter Your Website' name='website' />
                    <InputItems className='birth-date' onChange={handleChange} label={<FaBirthdayCake />} type='date' name='DOB' />
                    <InputItems className='age' onChange={handleChange} label={<GiAges />} type='number' name='age' placeholder='Enter your age' />
                    <InputItems className='skills' onChange={handleChange} label='Skill' name='skills' placeholder='List one relevent skill' />
                    <InputItems className='experience' onChange={handleChange} label={<MdOutlineSchool />} name='experience' placeholder='Enter your experience' />
                    <InputItems className='graduation Year' onChange={handleChange} label='Graduation Year' name='graduation Year' placeholder='Enter your Graduation Year' />
                    <InputItems className='accomplishments' onChange={handleChange} label='Accomplishment' name='accomplishment' placeholder='List one major accomplishment' />
                    <InputItems className='university' onChange={handleChange} label='University' name='university' placeholder='Enter University Name' />
                    <InputItems className='profile' onChange={handleChange} placeholder='Write about yourself' name='profile' isTextArea={true} />
                    {/* <InputItem className = 'profile' onChange {handleChange} placeholder = 'Write about yourself' name = 'profile' isTextArea = {true}/> */}
                    <button className='generate-button' onClick={() => {
                        onButtonClick()
                    }}>Generate Resume <HiArrowRight /></button>
                </div>
            </div>
            }
        </>
    )
}
export default PromptUser;
