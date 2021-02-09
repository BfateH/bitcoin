import { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux";

export const Home = props => {
    const [valueBTC, setValueBTC] = useState(0);
    const [fantasyBTC, setFantasyBTC] = useState(0);
    const [money, setMoney] = useState(0);
    const [moneyFantasy, setMoneyFantasy] = useState(0);

    const currencyBTC = useSelector(state => state.global.btc);
    const currencyDollar = useSelector(state => state.global.dollar);

    const onSubmitHandler = event => {
        event.preventDefault();
    }

    const onChangeHandler = event => {
        if(event.target.name === 'valueBTC') {
            if(+event.target.value >= 0) {
                setValueBTC(+event.target.value);
            }
        }

        if(event.target.name === 'fantasyBTC') {
            if(+event.target.value >= 0) {
                setFantasyBTC(+event.target.value);
            }
        }
    }

    useEffect(() => {
        let common_cost = (currencyBTC * currencyDollar) / 100000000;
        let i_have = (valueBTC * common_cost).toFixed(2)
        setMoney(i_have)
    }, [valueBTC, currencyBTC, currencyDollar])

    useEffect(() => {
        let common_cost = (fantasyBTC * currencyDollar) / 100000000;
        let i_have = (valueBTC * common_cost).toFixed(2)
        setMoneyFantasy(i_have)
    }, [fantasyBTC, currencyBTC, currencyDollar, valueBTC])

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group mt-3">
                    <h5 className="text-center">Введите количество вашего BTC в сатошах</h5>
                    <div className="text-center"><i>Например: 1000</i></div>
                    <input 
                        name="valueBTC" 
                        type="text" 
                        className="mx-auto mt-3 form-control"
                        value={valueBTC}
                        onChange={onChangeHandler}
                    />
                </div>
            </form>
            <div 
                className="alert mt-3 text-center alert-secondary"
            ><b>По текущему курсу вы имеете: {money} руб.</b></div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group mt-3">
                    <h5 className="text-center">Введите желаемый курс BTC в долларах</h5>
                    <div className="text-center"><i>Например: 50000</i></div>
                    <input 
                        name="fantasyBTC" 
                        type="text" 
                        className="mx-auto mt-3 form-control"
                        value={fantasyBTC}
                        onChange={onChangeHandler}
                    />
                </div>
            </form>    
            <div 
                className="alert mt-3 text-center alert-secondary"
            ><b>По вашему курсу вы имеете: {moneyFantasy} руб.</b></div>        
        </Fragment>
    );
}