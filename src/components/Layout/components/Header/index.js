//Hooks
import { useEffect, useState } from 'react';
//import library scss
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
//FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCrosshairs,
    faGift,
    faHandshake,
    faLifeRing,
    faMagnifyingGlass,
    faPhone,
    faSpinner,
    faUser,
    faWrench,
} from '@fortawesome/free-solid-svg-icons';
//import Tippy
import Tippy from '@tippyjs/react/headless';
//import output file images
import images from '~/assets/images';
//import file handle css search results
import { Wrapper as PopperWrapper } from '~/components/Poper';
//import result search
import SearchItems from '~/components/SearchItems';
//impport Button
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const headerContacts = ['Khách cá nhân', 'Khách doanh nghiệp', 'Bán hàng - TP HN'];

    const supports = [
        {
            name: 'Tìm cửa hàng gần nhất',
            icon: faCrosshairs,
        },
        {
            name: 'Hỗ trợ',
            icon: faLifeRing,
        },
        {
            name: 'Trung tâm dịch vụ',
            icon: faHandshake,
        },
        {
            name: 'Khuyến mại',
            icon: faGift,
        },
        {
            name: 'Tài khoản',
            icon: faUser,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            {/* position contact */}
            <div className={cx('contact')}>
                <div className={cx('contact-left')}>
                    <FontAwesomeIcon className={cx('phone')} icon={faPhone} />
                    <span>
                        Gọi mua hàng: <b>1900.1903</b>
                    </span>

                    {headerContacts.map((headerContact, index) => {
                        return (
                            <Button styleContact key={index}>
                                <FontAwesomeIcon className={cx('phone')} icon={faPhone} />
                                <span>{headerContact}</span>
                            </Button>
                        );
                    })}
                </div>
                <div className={cx('contact-right')}>
                    {supports.map((support, index) => {
                        return (
                            <Button styleNormal key={index}>
                                <FontAwesomeIcon className={cx('phone')} icon={support.icon} />
                                <span>{support.name}</span>
                            </Button>
                        );
                    })}
                </div>
            </div>
            <hr style={{ width: window.innerWidth }} />
            <div className={cx('inner')}>
                {/* position logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo Hacom" />
                </div>
                {/* position search */}
                <Tippy
                    visible={searchResult.length < 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <SearchItems />
                                <SearchItems />
                                <SearchItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Nhập tên sản phẩm từ khóa cần tìm" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* position action */}
                <div className={cx('action')}>
                    <Button to="/xay-dung-cau-hinh">
                        <div className={cx('border-cycle')}>
                            <FontAwesomeIcon className={cx('wrench-icon')} icon={faWrench} />
                        </div>
                        <div className={cx('title-wrench')}>
                            <span>Xây dựng</span>
                            <br />
                            <span>Cấu hình</span>
                        </div>
                    </Button>

                    <Button to="/tra-cuu-don-hang">
                        <img src={images.transfer} alt="transfer" className={cx('border-cycle')} />
                        <div className={cx('title-wrench')}>
                            <span>Tra cứu</span>
                            <br />
                            <span>Đơn hàng</span>
                        </div>
                    </Button>

                    <Button to="/gio-hang" disable>
                        <img src={images.cart} alt="transfer" className={cx('cart')} />
                        <div className={cx('title-wrench')}>
                            <span>Giỏ hàng</span>
                            <br />
                            <span>Của tôi</span>
                        </div>
                    </Button>
                </div>
            </div>
            {/* <Button rounded classNames={cx('rounded')} leftIcon={<FontAwesomeIcon icon={faArrowAltCircleUp} />}>
                Về đầu trang
            </Button> */}
        </header>
    );
}

export default Header;
