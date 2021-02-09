import styles from './InfoItem.module.css';

export default function InfoItem(props) {
    return (
        <div className={styles.InfoItem}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.value}>{props.value}</div>
        </div>
    );
}