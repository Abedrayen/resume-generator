import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Resume from './components/Resume'
import Error from './components/Error'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi'
import PromptUser from './components/PromptUser'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GiAges } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import 'animate.css'


const converter = require('number-to-words')
function App() {
  const [userInfo, setUserInfo] = useState({})
  const [source, setSource] = useState('')
  const random_number = Math.floor(Math.random() * 10e4)
  const random_alpha_num = converter.toWords(random_number)
  const getRandomNumber = (randNum) => {
    return converter.toWords(randNum)
  }
  const generateImage = () => {
    setSource(`https://robohash.org/stefan-${random_alpha_num}`)
    console.log(source)
  }
  useEffect(() => { generateImage() }, [])
  function handleChange(e) {
    setUserInfo(prevInfo => {
      return {
        ...prevInfo, [e.target.name]: e.target.value
      }
    })
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/PromptUser' element={<PromptUser userObject={userInfo} imageSource={source} handleChange={handleChange} />} />
        <Route path='/resume' element={<Resume userObject={userInfo} imageSource={source} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
