import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss'
import images from '~/assets/images'


const cx = classNames.bind(styles) // Bind ở đây có thể làm cho file css có thể đặt tên class theo kiểu : post-item có dấu gạch ngang

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <div className={cx('search')}>
                    <input type="text" spellCheck={false} placeholder='Search Account And Video' />

                    <button className={cx('btn-close')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}>aaa</div>
            </div>
        </header>
     );
}

export default Header;