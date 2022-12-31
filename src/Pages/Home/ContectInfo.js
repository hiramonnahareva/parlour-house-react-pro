import React from 'react';
import { useForm } from 'react-hook-form';

const ContectInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='lg:flex flex-col items-center justify-center px-10 bg-accent'>
            <h2 className='text-3xl font-bold py-20 text-center'>Let us handle your project, professionally.</h2>

            <div className="form-control ">
                <form className='lg:w-[900px]' onSubmit={handleSubmit(onSubmit)}>
                    <div className='lg:flex gap-5'>
                        <div>
                            <input {...register("firstName", { required: true })} type="text" placeholder="First Name" className="input bg-white w-[400px]" />
                            <label className="label">
                                {errors.exampleRequired && <span className="label-text-alt text-red-600">First Name is required</span>}
                            </label>
                        </div>
                        <div>
                            <input {...register("lastName", { required: true })} type="text" placeholder="Last Name" className="input bg-white w-[400px]" />
                            <label className="label">
                                {errors.exampleRequired && <span className="label-text-alt text-red-600">Last Name is required</span>}
                            </label>
                        </div>
                    </div>
                    <div className='lg:flex gap-5'>
                        <div>
                            <input {...register("email", { required: true })} type="email" placeholder="Email Address" className="input bg-white w-[400px]" />
                            <label className="label">
                                {errors.exampleRequired && <span className="label-text-alt text-red-600">Email is required</span>}
                            </label>
                        </div>
                        <div>
                            <input {...register("phone", { required: true })} type="number" placeholder="Email Address" className="input bg-white w-[400px]" />
                            <label className="label">
                                {errors.exampleRequired && <span className="label-text-alt text-red-600">Email is required</span>}
                            </label>
                        </div>
                    </div>
                    <div>
                        <textarea {...register("massage", { required: true })} className='lg:w-[91%] w-[100%] rounded-lg p-5' placeholder='your masage' rows="10" id="" ></textarea>
                        <label className="label">
                            {errors.exampleRequired && <span className="label-text-alt text-red-600">Masage is required</span>}
                        </label>
                    </div>
                    <div className='text-center my-5'>
                        <button className="btn btn-primary "><input type="submit" value='Send Massage' /></button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContectInfo;