import { useForm } from "react-hook-form";
import { credentials, type LoginProps } from "./login.types";
import { zodResolver } from "@hookform/resolvers/zod";
import  Input  from "../../Shared/input/input";
import Button from "../../Shared/button/button";
import styles from "./login.module.scss";

const Login = ({...props}:LoginProps) => {
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(credentials)
    })
    const OnSubmit = () => {
        console.log('hi')
    }
    return (
        <div className={styles.Container}>
            <form onSubmit={handleSubmit(OnSubmit)} className={styles.Login}>
            <Input placeholder="Username" {...register("username")}/>
            <Input placeholder="Password" {...register("password")}/>
            <Button>Login</Button>
        </form>
        </div>
    )
}

export default Login;