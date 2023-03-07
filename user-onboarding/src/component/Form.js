import React from "react"


export default function Form(props){
    const { change, submit, errors  } = props
    const { username, email, password, tos} = props.values

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        props.change(name, newValue)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }
    return (
        <div>
            <h1>User Form</h1>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label> Name: 
                    <input 
                        placeholder="first and last name" 
                        type='text' 
                        name="username" 
                        value={username} 
                        onChange={onChange}
                    />
                </label>
                <br />
                <label> Email:
                    <input 
                        type='email' 
                        name="email" 
                        value={email} 
                        onChange={onChange}
                    />
                </label> 
                <br />
                <label> password:
                    <input 
                        type='password' 
                        name="password" 
                        value={password} 
                        onChange={onChange}
                    />
                </label>
                <br />
                <label>Terms of Service:
                    <input 
                        type='checkbox' 
                        name="tos" 
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <br />
                <button type="submit">Create A Friend</button>
            </form>
        </div>
    )
}