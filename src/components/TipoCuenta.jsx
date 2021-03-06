import Bienvenida from "./Bienvenida";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import comprador from "../img/comprador.png";
import vendedor from "../img/vendedor.png";
import { useState } from "react";

const TipoCuenta = () => {
  const historial = useHistory();

  const [tipoUsuario, setTipoUsuario] = useState();
  const successMessage = () => toast.success("Sucess");
  const errorMessage = () => toast.error("Seleccione un tipo de cuenta");
  const removeQue = () => toast.clearWaitingQueue();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (tipoUsuario === "vendedor" || tipoUsuario === "comprador") {
      successMessage();
      historial.push("/registro");
    } else {
      errorMessage();
    }
    removeQue();
  };

  return (
    <section className="w-screen min-h-screen flex flex-row bg-blueGray-800">
      <form className="login" onSubmit={handleSumbit}>
        <h1 className="text-3xl mb-10">Tipo de cuenta</h1>
        <div className="flex flex-row w-full justify-around">
          <div
            className="tipo-cuenta"
            onClick={() => setTipoUsuario("vendedor")}
          >
            <img src={vendedor} alt="vendedor" />
            <input
              id="vendedor"
              name="vendedor"
              type="radio"
              value="vendedor"
              className=""
              checked={tipoUsuario === "vendedor"}
            />
            <label htmlFor="vendedor" className="ml-4">
              Vendedor
            </label>
          </div>
          <div
            className="tipo-cuenta"
            onClick={() => setTipoUsuario("comprador")}
          >
            <img src={comprador} alt="comprador" />
            <input
              id="comprador"
              name="comprador"
              type="radio"
              value="comprador"
              checked={tipoUsuario === "comprador"}
            />
            <label htmlFor="comprador" className="ml-4">
              Comprador
            </label>
          </div>
        </div>
        <button className="button theme" type="submit">
          Continuar
        </button>
      </form>
      <Bienvenida message="Seleccione un tipo de cuenta para continuar" />
      <ToastContainer limit={1} />
    </section>
  );
};

export default TipoCuenta;
