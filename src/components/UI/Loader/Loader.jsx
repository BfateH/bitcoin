import styles from './Loader.module.css';
import logo from '../../../assets/images/bitcoin_logo.svg';

export default function Loader(props) {
    return (
        <div className={styles.LoaderWrapper}>
            <div className={styles.Loader}>
                <div><img src={logo} alt="loader"/></div>
            </div>
        </div>
    );
}