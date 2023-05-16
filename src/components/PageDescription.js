import styles from "./PageDescription.module.css";

export default function pageDescription({title, description}){
    return (
        <div className={styles.PageDescription}>
            <h1>{title}</h1>
            <div className={styles.Divider}></div>
            <span>{description}</span>
        </div>
    );
}