import Link from 'next/link'
import Container from '../components/Container'

const Registro = () => {
    return (
        <div className="container p-4">
            <Container>
                <br></br>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">Nombres</label>
                            <input type="text" className="form-control" maxLength="100" id="firstName" placeholder="Nombres" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Apellidos</label>
                            <input type="text" className="form-control" maxLength="100" id="lastName" placeholder="Apellidos" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="identification">Identificacion</label>
                            <input type="text" className="form-control" maxLength="20" id="identification" placeholder="Número de identificación" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="birth_date">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" id="birth_date" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" maxLength="255" className="form-control" id="email" placeholder="Correo Electrónico" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" maxLength="255" className="form-control" id="password" placeholder="Contraseña" required />
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-6">
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Ya eres usuario, <Link href="/login"><a>Ingresa</a></Link></label>
                        </div>
                    </div>

                </form>
            </Container>
        </div>
    )
}

export default Registro;