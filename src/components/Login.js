import '../css/Form.css'

export const Login = () => {

    return (
        <div className='form'>
            <span className='form-heading'>SIGN IN</span>
            <div className='input-group'>
                <input type="text" className='input' placeholder='Username or email'/>
                <span className='error-message'>Invalid username or email!</span>
            </div>
            <div className='input-group'>
                <input type="password" className='input' placeholder='Password'/>
                <span className='error-message'>Wrong password!</span>
            </div>
            <a href='#' className='forgot-link'>Forgot password?</a>
            <div className='button-group'>
                <button className='button'>Sign in</button>
            </div>
        </div>
    );
}