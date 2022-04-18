import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    name: string;
    age: number
}

export const Form = () => {

    const {values, handleChange, reset} = useForm<FormData>({
        email: '',
        name: '',
        age: 30
    });
    
    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label  className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Name:</label>
                <input type="text"
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                />
            </div>
            <pre>{JSON.stringify(values)}</pre>
        </form>
    )
}