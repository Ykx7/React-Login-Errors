import { useState } from "react";
import "./style.css";
export default function SignUp(){

        const [Name, setName] = useState('');
        const [Email, setEmail] = useState('');
        const [Password, setPassword] = useState('');
        const [PasswordR, setPasswordR] = useState('');
        const [accept , setaccept] = useState(false)
        
    function Submit(e){

        e.preventDefault();
        setaccept(true);
    }
    return(
        <div className="parent">
            <div className="register" >

            <form onSubmit={Submit}>
                <label htmlFor="Name">Name</label>
                <input id="name" type="text" placeholder="Name..." value={Name} onChange={(e) => setName(e.target.value)}/>
                {Name.length < 2 && accept && (<p className="error">Name Must Be More Then 2 Char !!</p>)}

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" placeholder="Email..." value={Email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="Password">Password:</label>
                <input id="password" type="password" placeholder="Password..." value={Password} onChange={(e) => setPassword(e.target.value)}/>
                {Password.length < 8 && accept && (<p className="error" >Password Must Be More Then 8 Chart !!</p>)}

                <label htmlFor="Reapet Password">Reapet Password:</label>
                <input id="Reapet_Password" type="password" placeholder="Reapet Password..." value={PasswordR} onChange={(e) => setPasswordR(e.target.value)}/>
                {PasswordR !== Password && accept && <p className="error" >The Password Is Not To Match !!</p>}

                <div style={{ textAlign: "center" }}>
                    <button type="submit">register</button>
                </div>

            </form>
            </div>
        </div>
    )
}