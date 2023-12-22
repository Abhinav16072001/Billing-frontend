import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('dev'); // Default role is 'dev'

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/gateway/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, name, role }),
            });

            const data = await response.json();

            if (response.ok) {
                // Successful signup
                console.log('Signup successful!', data);
                // Reset form fields after successful signup
                setUsername('');
                setPassword('');
                setName('');
                setRole('dev'); // Resetting role to default
            } else {
                // Handle unsuccessful signup
                console.error('Signup failed:', data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Email:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Role:
                    <select value={role} onChange={handleRoleChange}>
                        <option value="dev">Developer</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
