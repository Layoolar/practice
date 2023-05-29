import React, { useState } from 'react'
import Input from '../../components/Input/Index'
import styles from "./Login.module.css"
import Button from '../../components/Button/Index'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices/authenticationSlice'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(username, password)
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
              username,
              password,
            });
            console.log('Login successful:', response.data);
            dispatch(setUser(response.data));
            // Dispatch success action or perform any other logic
            navigate("/")
          } catch (error) {
            console.error('Login error:', error);
            // Dispatch error action or perform any other error handling logic
          }




    };

  return (
    <div className={styles.root}>
        <div className={styles.container}>
            <Input label="Username" type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className={styles.container}>
            <Input label="Password" type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
        </div>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
            Submit
      </Button>
    </div>
  )
}

export default Login
