import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";
import Styles from './DefaultLayout.module.scss'

const cx = classNames.bind(Styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export  { DefaultLayout };