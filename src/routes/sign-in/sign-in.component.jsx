import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    }
    
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}>
                Sign In
            </button>
        </div>
    )
}

export default SignIn;