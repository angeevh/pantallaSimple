import Link from 'next/link'
import Head from 'next/head'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link href="/">
                    <a className="navbar-brand">Principal</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="../registro">Registro <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="../login">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;