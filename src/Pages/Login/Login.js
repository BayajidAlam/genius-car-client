import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.email.value;
    const password = form.password.value;
    console.log(name,password)
  }

  return (
    <div className="hero w-full">
  <div className="hero-content  grid grid-cols-1 md:grid-cols-2 gap-10 p-32">

    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>

    <div className="card  w-full  shadow-2xl bg-base-100 py-20">
    <h1 className="text-3xl font-bold text-center">Login</h1>

      <form onSubmit={handleSubmit} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-4">
          <input className='btn btn-primary' type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center'>New to Genius Car <Link className='text-orange-500 font-bold' to='/register'>Sign up</Link></p>
    </div>

  </div>
</div>
  );
};

export default Login;