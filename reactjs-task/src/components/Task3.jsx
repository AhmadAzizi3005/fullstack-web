import { useState } from "react";

export default function Task3(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if(name === 'email'){
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value);
        }
    }

    const validateForm = () => {
        let errors = { email: '', password: '' };
        let isValid = true;

        if(!email){
            errors.email = 'Email tidak boleh kosong';
            isValid = false;
        }
        if (!password){
            errors.password = 'Password tidak boleh kosong';
            isValid = false;
        }
        setFormErrors(errors);
        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
            console.log('Formulir dikirim', { email, password });
            alert("formulir terkirim")
        } else {
            console.log('Formulir tidak valid');
           
        }
    };
    

    return(
        <div className="h-screen flex flex-col justify-center items-center text-center">
            <h2>Validasi Formulir sederhana</h2>
            <form onSubmit={handleSubmit} > 
                <div>
                    <div >
                    <label htmlFor="email">Email :</label>
                    </div>
                 
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="bg-slate-300"
                    />
                    <div className="error">{formErrors.email}</div>
                </div>
            
                <div>
                    <div >
                    <label htmlFor="password">Password :</label>
                    </div>
                   
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="bg-slate-300"
                    />
                    <div className="error">{formErrors.password}</div>
                </div>
            
                <button type="submit" className="p-2 bg-slate-200 rounded-sm mt-2">Submit</button>
            </form>
        </div>
    );
}
