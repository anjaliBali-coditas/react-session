import type { ButtonProps } from "./button.types";
import styles from "./button.module.scss";

const Button = ({children, ...props}:ButtonProps) => {
    return (
        <button {...props} className={styles.Button}>{children}</button>
    )
}

export default Button;