// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "../../hooks/useForm";
// import { useDispatch } from "react-redux";
// import {  startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

// export const LoginScreen = () => {

//   const dispatch  = useDispatch();

//   const [ formValues, handleInputChange] = useForm({
//     email: 'junior@gmail.com',
//     password: '123456'
//   });

//   const { email, password} = formValues;

//   const handleLogin = (e) => {
//     e.preventDefault();
//    dispatch( startLoginEmailPassword(email, password));
//   }

//   const handleGoogleLogin = () => {
//     dispatch(startGoogleLogin ());
//   }

//   return (
//     <>
//       <h3 className="auth__title">Login</h3>
//       <form onSubmit={ handleLogin}>
//         <input
//           type="text"
//           placeholder="Email"
//           name="email"
//           className="auth__input"
//           autoComplete="off"
//           value={ email}
//           onChange={ handleInputChange}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           className="auth__input"
//           value={ password}
//           onChange={handleInputChange}
//         />

//         <button
//           type="submit"
//           className="btn btn-primary btn-block"
//           // disabled={ true}
//         >
//           Login
//         </button>

//         <div className="auth__social-networks">
//           <p>Login with social networks</p>
//           <div className="google-btn"
//           onClick={handleGoogleLogin}
//           >
//             <div className="google-icon-wrapper">
//               <img
//                 className="google-icon"
//                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//                 alt="google button"
//               />
//             </div>
//             <p className="btn-text">
//               <b>Sign in with google</b>
//             </p>
//           </div>
//         </div>

//         <Link to="/auth/register" className="link">
//           Crear una nueva cuenta
//         </Link>
//       </form>
//     </>
//   );
// };


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin, loginFacebook } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
    const handleFacebook = () => {
        dispatch(loginFacebook());
        // history.replace('/auth');
    }


    return (
        <>
            <h3 className="auth__title">Inicia sesión</h3>

            <form 
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Continuar
                </button>

                
                <div className="auth__social-networks">
                    <p>Puedes acceder con Google</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Accede con Google</b>
                        </p>
                    </div>

                    <div 
                        className="google-btn"
                        onClick={ handleFacebook }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1642200372/Amazonas/facebook-logo-3-1_fegy6m_aebzrr.png" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Accede con Facebook</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    No tienes cuenta? Registrate
                </Link>

            </form>
        </>
    )
}
