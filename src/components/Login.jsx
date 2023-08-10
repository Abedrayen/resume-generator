import React from 'react'
import PromptUser from './PromptUser'
import { useNavigate, Link } from 'react-router'
import { HiArrowRight } from 'react-icons/hi'
import { useEffect, useState } from 'react'
const Login = (userObject) => {
    const navigate = useNavigate()
    const onButClick = () => {
        navigate('/PromptUser')
    }
    return (
        <div>
            <input className='pseudo' placeholder='Enter your pseudo' name='pseudo' />
            <input className='pass' placeholder='Enter your pass' name='pass' />
            <button className='generate-button' onClick={() => {
                onButClick()
            }}>Login <HiArrowRight /></button>
        </div>
    )
}

export default Login