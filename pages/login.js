import Link from 'next/link'
import Container from '../components/Container'

const Login = () => {
  return (
    <div className="container p-4">
      <Container>
        <br></br>
        <div>
          <form align="center">
            <p>
              <label>Usuario </label>
              <input controlName="user" name="user" id="user" type="text" placeholder="Usuario" required></input>
            </p>
            <p>
              <label>Contraseña </label>
              <input controlName="password" name="password" id="password" type="password" placeholder="Contraseña" required></input>
            </p>
            <label>¿No estás registrado? Registrate <Link href="/registro"><a>Aquí</a></Link> </label>
            <p>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </p>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Login;


