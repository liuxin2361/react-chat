import './Login.scss';
import { Button } from '@mui/material';


const Login = () => {

    const signIn = () => { };

    return (
        <div className='login'>
            <div className='loginLogo'>
                <img src='./wechat.png' alt='' />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;