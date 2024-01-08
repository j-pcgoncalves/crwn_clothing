import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    useEffect(() => {
        async function getRedirectResponse() {
            const response = await getRedirectResult(auth);
            
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
        }

        getRedirectResponse();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    );
}

export default SignIn;