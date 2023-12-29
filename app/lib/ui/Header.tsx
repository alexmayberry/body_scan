

export default function Header() {

    return (
        <header className="flex space-x-8 mb-10">
            <span>Logo</span>
            <nav>
                <ul className="flex space-x-4">
                    <li>About</li>
                    <li>Work</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </header>
    )
}