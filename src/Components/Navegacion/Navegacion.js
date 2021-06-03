const navegacionXRol = {
  Login: [],
  EntidadPrimaria: [
    { label: "Institucion", path: "/entidad-primaria/institucion" },
    { label: "Pacientes", path: "/entidad-primaria/pacientes" },
    { label: "Reportes", path: "/entidad-primaria/reportes" },
  ],
  EntidadProveedora: [
    { label: "Entidades primarias", path: "/entidad-proveedora/entidades-primarias" },
    { label: "Reportes", path: "/entidad-proveedora/reportes" },
    { label: "Configuración", path: "/entidad-proveedora/configuracion" },
  ],
  Paciente: [
    { label: "Citas", path: "/paciente/citas" },
    { label: "Pland de accion", path: "/paciente/plan-accion" },
    { label: "Diario", path: "/paciente/diarios" },
    { label: "Grupos de Apoyo", path: "/paciente/grupos-apoyo" },
    { label: "Encuestas", path: "/paciente/encuestas" },
  ],
  Psicologo: [
    { label: "Agenda", path: "/psicologo/agenda" },
    { label: "Pacientes", path: "/psicologo/pacientes" },
    { label: "Grupos de Apoyo", path: "/psicologo/grupos-apoyo" },
  ],
};
export const Navegacion = (rol) => {
    return navegacionXRol[rol];
};
