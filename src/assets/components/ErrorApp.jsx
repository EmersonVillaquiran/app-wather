import './styles/ErrorApp.css'

const ErrorApp = () => {
  return (
    <div error>
      <h1 className="error__title">✖️Hubo un error al cargar el clima✖️  <span><br/>Inténtalo de nuevo ingresando un país o ciudad correctos👌</span></h1>
    </div>
  );
};

export default ErrorApp;