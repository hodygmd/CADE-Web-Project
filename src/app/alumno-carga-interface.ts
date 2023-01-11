export interface NumeroControlFk {
  id: string;
  nombreAlumno: string;
  ape2Alumno: string;
  ape1Alumno: string;
}

export interface AlumnoCargaInterface {
  numeroControlFk: NumeroControlFk;
}
