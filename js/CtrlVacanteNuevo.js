import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraAlumnos
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoAlumno =
  getFirestore().
    collection("Vacante");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    const matricula = getString(
        formData, "puesto").trim();  
    const nombre = getString(formData, "nombre").trim();
    const telefono = getString(formData, "telefono").trim();
    const grupo = getString(formData, "domicilio").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Vacante} */
    const modelo = {
      puesto,
      nombre,
      telefono,
      domicilio,
      fecha 
    };
    await daoVacante.
      add(modelo);
    muestraVacantes();
  } catch (e) {
    muestraError(e);
  }
}

