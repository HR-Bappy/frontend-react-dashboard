import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Select from "../../../components/select";
import './edit-user.scss'
import { LocalStorageService } from "../../../services/localStorage.service";
import { useNavigate, useParams } from "react-router-dom";
import { roleList, users } from "../../../data/user";
import AddEditForm from "../add-edit-form";
import { useEffect, useState } from "react";
function Login({ }) {
    const { id } = useParams();
    const userData = users
    const navigate = useNavigate()
    const [defalutValue, setDefaultValue] = useState()
    const [hasLoaded, setHasLoaded] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {
        for (let i = 0; i < userData?.length; i++) {
            if (userData[i].id == id) {
                setDefaultValue(userData[i])
                break;
            }
        }
        return () => setHasLoaded(true)
    }, [])

    const onSubmit = async (data: any) => {
        try {
            data.id = Math.floor(1000 + Math.random() * 9000)
            LocalStorageService.set('user_data', data)
            // 
            toast.success('User Created')
            navigate('/user')
            console.log('data', data)
            // window.location.reload();


        } catch (error) {
        }
    };

    return (
        <div className="user-add-page">
            {hasLoaded &&
                <div className="container-fluid">
                    <AddEditForm onSubmit={onSubmit} title='Edit User' defaultValue={defalutValue} />
                </div>
            }

        </div>
    );
}

export default Login;