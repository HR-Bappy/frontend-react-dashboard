import { useForm } from "react-hook-form";
import Select from "../../components/select";
import { roleList } from "../../data/user";

const AddEditForm = ({onSubmit,defaultValue,title}:any) => { const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
} = useForm(
    {
        defaultValues: defaultValue,
      }
);
console.log('defaultValue',defaultValue)


    return(
        <form className="p-lg-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <h3 className="mb-4">{title}</h3>

                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Name</label>

                            <input
                                placeholder="Enter your name"
                                type="text"
                                className="form-control"
                                {...register("name", {
                                    required: "Name is required",

                                })}
                            />
                        </div>
                        <div className="col-md-6  mb-3">
                            <label className="form-control-label">Email</label>

                            <input
                                placeholder="Enter your email"
                                type="email"
                                className="form-control"
                                {...register("email", {
                                    required: "Email Address is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Phone</label>

                            <input
                                placeholder="Enter your phone no."
                                type="text"
                                className="form-control"
                                {...register("phone", {
                                    required: "Phone is required",

                                })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-control-label">Location</label>

                            <input
                                placeholder="Enter your location"
                                type="text"
                                className="form-control"
                                {...register("location", {
                                    required: "Location is required",

                                })}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label className="form-control-label">From</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter password date"
                                {...register("from", { required: "From date is required" })}
                            />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label className="form-control-label">To</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter password date"
                                {...register("to", { required: "To date is required" })}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <Select
                                isRequired
                                valuesKey="name"
                                textKey="name"
                                placeholder="Select Role"
                                label="Select Role"
                                color={errors.district_name ? "danger" : "secondary"}
                                options={roleList}
                                registerProperty={{
                                    ...register("role", {
                                        required: true,
                                    }),
                                    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                        console.log(e.target.value)
                                }}
                                errorMessage={
                                    errors.district_name &&
                                    `${errors.district_name?.message
                                        ? errors.district_name?.message
                                        : "Field is required!"
                                    }`
                                }
                            />
                        </div>
                        <div className="text-center col-md-2 offset-md-5"><button type="submit" className="btn btn-color  px-5 mb-5 w-100">Create</button></div>

                    </div>
                </form>
    )
}

export default AddEditForm