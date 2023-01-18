export class Calificacion {
  constructor(
    public idCargaAcademicaFkId: number,
    public calificacion: number,
    public nivelDesempenio: string,
    public statusCalificacion: string
  ) {}
}
