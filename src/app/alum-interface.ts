export interface NumeroControlFk {
  id: string;
  ape2Alumno: string;
  ape1Alumno: string;
  nombreAlumno: string;
}

export interface AlumnInterface {
  id: number;
  numeroControlFk: NumeroControlFk;
}
