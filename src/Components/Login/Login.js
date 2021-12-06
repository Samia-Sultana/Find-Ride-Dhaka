import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebaseConfig from '../../firebaseConfig';
import * as firebase from 'firebase/app';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, provider } from "firebase/auth";
import './Login.css'
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        //set email and accesstoken in  state
                        const newUser = {...userInfo};
                        newUser.loggedInEmail = userCredential.user.email;
                        newUser.accessToken = userCredential.user.accessToken;
                        setUserInfo(newUser);
                        history.replace(from);

                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            

    }

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                //set email and accesstoken in  state
                const newUser = {...userInfo};
                newUser.loggedInEmail = result.user.email;
                newUser.accessToken = credential.accessToken;
                setUserInfo(newUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <div className="login-signup-form">
                <h3>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} placeholder="email" />
                    {errors.email && "email is required"}

                    <input {...register("password", { required: true })} placeholder="password" />
                    {errors.password?.type === 'required' && "password is required"}

                    <input type="submit" className="submit" />
                </form>
                <p><small>Don't have an account?<Link to="/signUp">Create an account</Link></small></p>
            </div>
            <div className="signup-login-with">
                <button onClick={handleGoogleLogin}><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;