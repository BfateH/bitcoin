import { useSelector } from 'react-redux';
import InfoItem from './InfoItem/InfoItem';
import styles from './InfoToolbar.module.css';

export default function InfoToolbar(props) {
    const btc_value = useSelector(state => state.global.btc);
    const dollar_value = useSelector(state => state.global.dollar);

    return (
        <div className={styles.InfoToolbar}>
            <InfoItem title="Курс BTC" value={`$ ${btc_value}`} />
            <InfoItem title="Курс Доллара" value={`$ ${dollar_value}`} />
        </div>
    );
}