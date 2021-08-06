import Link from 'next/link';

const NavItem = ({link, content, button}) => {
    return (
        <Link href={link}>
            <div className="nav__item">
                <a className={`nav__link ${button?'nav__button':''}`}>{content}</a>
            </div>
        </Link>
    )
}

export default NavItem;