import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Select from "../../../components/select";
import './add-user.scss'
import { LocalStorageService } from "../../../services/localStorage.service";
import { useNavigate } from "react-router-dom";
import { roleList } from "../../../data/user";
import AddEditForm from "../add-edit-form";
function Login() {
    const navigate = useNavigate()
    const defalutValue = {
        type:'',
        role:'',
        phone:'',
        name:'',
        password:'',
        email:'',
        location:'',
        from:'',
        to:''}
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

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
            <div className="container-fluid">
                <AddEditForm onSubmit={onSubmit} title='Add User' defaultValue={defalutValue} />
            </div>
        </div>
    );
}

export default Login;