import type { InputProps } from "./input.types";
import styles from "./input.module.scss";

const Input = ({...props}:InputProps) => {
    return (
        <div>
            <input {...props} placeholder={props.placeholder} className={styles.Input}/>
        </div>
    )
}

export default Input;