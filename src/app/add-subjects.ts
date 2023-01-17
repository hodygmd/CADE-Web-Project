export class AddSubjects {
  constructor(
    public claveCarreraFkId: string,
    public claveMateriaFkId: string,
    public idGrupoFkId: number,
    public periodoSemestre: string
  ) {}
}
