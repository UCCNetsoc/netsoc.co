const Header = (): JSX.Element => {
    const todaysDate = new Date().toLocaleDateString();

    return (
        <div>
            <h1>{ todaysDate }</h1>
        </div>
    )
};

export default Header;
