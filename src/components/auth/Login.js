import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const styles = {
  rowStyle: {
      height: '80vh',
  },
  bgImg: {
      height: '40vw',
      opacity: 0.05,
      position: 'absolute',
      left: '-220px',
  },
  btnIniciar: {
      background: '#42B4D9',
      borderColor: '#42B4D9'
  },
  email: {
      color: 'darkblue',
      fontWeight: 'bold'
  },
  btnsCodigo: {
      display: 'flex',
      justifyContent: 'space-between'
  }
}

export const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValues, handleInputChange ] = useForm({
      email: '',
      password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="row d-flex align-items-center" style={styles.rowStyle}>
            <img src="" className="d-inline-block my-4" alt="logo"/>
            <div className="col-md-6 offset-md-3">
                <div className="card bg-light "> 
                    <div className="card-body">
                        <div className="text-center mb-5">
                            <img src="logo.png" className="d-inline-block my-4" alt="logo" height="45" />
                            <h4 className="card-title">Welcome!</h4>
                        </div>
                        <form id="f-login" onSubmit={handleLogin} method="POST" >
                            <div className="form-group">
                                <input
                                    id="email-L"
                                    /* type="email" */
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={ handleInputChange }></input>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={ handleInputChange }></input>
                            </div>
                            <button type="button" className="btn btn-link text-info" >Forgot account?</button>
                            <div className="form-group text-right pt-3">
                                <button type="submit" className="btn btn-primary" style={styles.btnIniciar}>Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )   
}