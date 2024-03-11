// Toda la config la empezamos a importar en este index y desde aca la exportamos

import empleadosData from "./empleados.json";
import { navlinks } from "./navlinks.tsx";

export const empleados = empleadosData.employees;
export const navbarLinks = navlinks;
