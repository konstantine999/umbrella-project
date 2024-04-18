const Header = () => {
    return (
        <header className="w-full flex justify-center text-center">
            <nav>
                <ul className="flex gap-9">
                    <li>
                        <a href="/">Main</a>
                    </li>
                    <li>
                        <a href="/admin">Admin</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
