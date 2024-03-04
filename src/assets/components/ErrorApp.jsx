import './styles/ErrorApp.css'

const ErrorApp = () => {
  return (
    <div error>
      <h1 className="error__title">✖️Hubo un error al cargar el clima✖️. <span><br/>Se impidió el acceso a la ubicación🤦‍♂️.</span> <span><br />Inténtalo de nuevo👌</span></h1>
    </div>
  );
};

export default ErrorApp;