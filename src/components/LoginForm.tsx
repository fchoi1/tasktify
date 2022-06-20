import React, { useState } from 'react';

export default function LoginForm({ formType }: { formType: string }) {
  const [formState, setFormState] = useState({
    email: '',
    username: '',
    password: ''
  });

  console.log(formState);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    //Validate form
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>

        <input
          id="username"
          name="username"
          type="text"
          placeholder="username"
          value={formState.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="******"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}
