import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


const OAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()


    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            // console.log(result)  
            const res = await fetch('/api/auth/google', {
              method: 'POST',
              headers: {
                 'Content-Type' : 'application/json'
              },
              body: JSON.stringify({ 
                name: result.user.displayName, 
                email: result.user.email, 
                photo: result.user.photoURL 
              })
            }) 
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')
                     
        } catch (err) {
            console.log("Could not Sign In with Google", err)
        }
    }

  return (
    <div>
        <button
          type="button" 
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 rounded-lg p-3 uppercase text-lg text-white"
        >
           Continue with Google
        </button>
    </div>
  )
}

export default OAuth