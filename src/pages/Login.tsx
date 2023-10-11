import {auth,provider} from '../config/firebase';

import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';


export const Login = () => {
    const navigate = useNavigate();
    const SignInWithGoogle = async() => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/');
    }
    
    return(
        <div className='login-interface'>
            <button onClick={SignInWithGoogle} className='google-login'>Sign in with Google</button>
        </div>
    )
}

