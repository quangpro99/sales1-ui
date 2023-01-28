//import library scss
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchItems.module.scss';

const cx = classNames.bind(styles);

function SearchItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://hanoicomputercdn.com/media/product/120_67561_anker_737_5.png"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>
                        Pin sạc dự phòng 24.000 mAh Anker 737 GaNPrime PowerCore 24K A1289 - PD 140W - 01 cổng Type A +
                        02 cổng Type C - Màu đen
                    </span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('price')}>20000000</span>
            </div>
        </div>
    );
}

export default SearchItems;
