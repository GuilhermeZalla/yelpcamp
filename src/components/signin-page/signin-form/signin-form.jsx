const SignInForm = (props) => {
    return (
        <form className="form">
            <fieldset>
                <legend className="main__title">
                   Start Exploring camps from all around the world
                </legend>
                <p>
                    <label className="main__label" htmlFor="">Username</label>
                    <input className="main__input" type="text" placeholder="johndoe_91" autoComplete="on" onBlur={props.getUsername} />
                </p>
                <p>
                    <label className="main__label" htmlFor="">Password</label>
                    <input className="main__input" type="password" placeholder="Enter Your Password" autoComplete="on" onBlur={props.getPassword} />
                </p>
            </fieldset>
        </form>
    )
}

export default SignInForm;