import Navigation from "./Navigation.jsx";

const Header = () => {
    return (
        <header className="rounded-t-2x bg-gray-700/60">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">Luke Skywalker</h1>
        </header>
    )
}

export default Header;