export interface ClaveMateriaFk {
  id: string;
  horasTeoricas: string;
  totalCreditos: string;
  nombreMateria: string;
  horasPracticas: string;
}

export interface IdHorarioFk {
  claveMateriaFk: ClaveMateriaFk;
}

export interface IdOpcionFk {
  oportunidadOpcion: string;
  descripcionOpcion: string;
}

export interface CargaSemestreInterface {
  id: number;
  idHorarioFk: IdHorarioFk;
  idOpcionFk: IdOpcionFk;
  statusCargaAcademica: string;
}
