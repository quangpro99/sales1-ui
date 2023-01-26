import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    //children: <Page /> trong App.js
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
