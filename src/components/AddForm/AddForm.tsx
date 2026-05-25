import React, { useId } from 'react';

interface AddFormProps {
    onClose: () => void;
}

const AddForm = ({ onClose }: AddFormProps) => {
    const id = useId();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;

        const userInfo = {
            username: name,
            email: email
        };

        console.log(userInfo);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={`${id}-name`}>Name:</label>
            <input type="text" id={`${id}-name`} name="name" placeholder="Name" required />
            <label htmlFor={`${id}-email`}>Email:</label>
            <input type="text" id={`${id}-email`} name="email" placeholder="Email" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddForm;