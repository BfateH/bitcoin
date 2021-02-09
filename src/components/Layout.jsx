import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchSetBTC } from "../store/actions/globalActions.js";
import  Header  from "./Header/Header.jsx"
import InfoToolbar from "./InfoToolbar/InfoToolbar.jsx"
import Loader from "./UI/Loader/Loader.jsx";

export default function Layout(props) {
    const initialize = useSelector(state => state.global.initialized);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSetBTC());
    }, [dispatch])

    return (
        <Fragment>
            <Header />
            
            <div className="container">
                { !initialize 
                    ? <Loader />
                    : <Fragment>
                        <InfoToolbar />
                        { props.children }
                      </Fragment> 
                }
            </div>
        </Fragment>
    );
}