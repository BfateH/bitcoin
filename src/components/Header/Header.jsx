import { Fragment } from "react"
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/bitcoin_logo.svg';
import styles from './Header.module.css';


export default function Header (props) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img className={styles.img} src={logo} alt="logo"/>
                    <span className={styles.logoText}>Bitcoin | Fantasy</span>
                    </NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarColor01" 
                    aria-controls="navbarColor01" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/avarage" exact>Рассчитать по средней</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>            
        </Fragment>
    );
}