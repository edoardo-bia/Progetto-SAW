import './form.css'

function Form(){
    return(
        <>
            <div className='form-container'>
                <form>
                    <input type='email' placeholder='Insert e-mail'></input>
                    <input type='password' placeholder='Password'></input>
                    <div className='container-button'>
                        <button className='button-log'>Log in</button>
                        <button className='button-reg'>Register</button>
                    </div>
                </form>
            </div>            
        </>
    )
}


export default Form