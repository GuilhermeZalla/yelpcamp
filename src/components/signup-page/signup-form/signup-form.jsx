const SignUpForm = (props) => {
    return (
        <form className="form">
            <fieldset>
                <legend className="main__title">
                    Start Exploring camps from all around the world
                </legend>
                <p>
                    <label className="main__label" htmlFor="username" ref={props.username}>Username</label>
                    <input id="username" className="main__input" type="text" placeholder="johndoe_91" onBlur={props.getUsername} autoComplete="on" />
                </p>
                <p>
                    <label className="main__label" htmlFor="password">Password</label>
                    <input id="password" className="main__input" type="password" placeholder="Choose a Password" onBlur={props.getPassword} autoComplete="on" />
                </p>
            </fieldset>
        </form>
    )
}

export default SignUpForm;