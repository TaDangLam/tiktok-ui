import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, children, onClick, passProps, primary = false, outline = false, small = false, large = false }) {
    let Compo = 'button';

    const props = {
        onClick,
        ...passProps
    }

    if(to) {
        props.to = to;
        Compo = Link;
    }else if(href){
        props.href = href;
        Compo = 'a';
    }

    const classes = cx('wrapper', {
        primary,                     // primary: primary => khi truyền vào primary thì primary trong classes = true và tạo ra thêm vào class tên primary
        outline,
        small,
        large
    })

    return ( 
        <Compo className={classes} {...props}>
            <span>{children}</span>
        </Compo>
     );
}

export default Button;