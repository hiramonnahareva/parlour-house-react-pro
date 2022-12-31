import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='w- gap-5 bg-neutral'>
            {/* <h2 className="text-2xl text-purple-600">asjdkajd</h2>
            <h2 className="text-2xl text-purple-600">{appoinment_Id}</h2> */}
            <div className="card w-full bg-base-100 shadow-xl my-5">
            <form className='lg:w-[900px]' onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                <div>
                <input {...register("firstName", { required: true })} type="text"  placeholder="First Name" className="input input-bordered w-[400px]" />
                <label className="label">
                {errors.exampleRequired && <span className="label-text-alt text-red-600">First Name is required</span>}
                </label>
                </div>
                <div>
                    <textarea {...register("massage", { required: true })} className='lg:w-[48%] w-[100%] border-[1px] border-gray-300 rounded-lg p-5'  placeholder='your masage' rows="5" id="" ></textarea>
                    <label className="label">
                {errors.exampleRequired && <span className="label-text-alt text-red-600">Masage is required</span>}
                </label>
                </div>
                </div>
            </form>
            </div>
      </div>
    );
};

export default AddService;