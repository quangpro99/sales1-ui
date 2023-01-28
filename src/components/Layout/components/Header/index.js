//Hooks
import { useEffect, useState } from 'react';
//import library scss
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
//FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
//import Tippy
import Tippy from '@tippyjs/react/headless';
//import output file images
import images from '~/assets/images';
//import file handle css search results
import { Wrapper as PopperWrapper } from '~/components/Popper';
//import result search
import SearchItems from '~/components/SearchItems';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* position logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo Hacom" />
                </div>
                {/* position search */}
                <Tippy
                    visible={searchResult.length > 0}
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
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
