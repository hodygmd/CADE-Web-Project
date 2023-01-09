export interface ClaveMateriaFk {
  id: string;
  horasTeoricas: string;
  horasPracticas: string;
  totalCreditos: string;
  nombreMateria: string;
}

export interface IdGrupoFk {
  numeroGrupo: string;
}

export interface SubjectInterface {
  claveMateriaFk: ClaveMateriaFk;
  idGrupoFk: IdGrupoFk;
}

