import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
     return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg" alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tạ Đăng Lâm</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('userName')}>danglam1306</span>
            </div>
        </div>
     );
}

export default AccountItem;