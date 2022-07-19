export interface RespuestaRegistos<T> {
  mensaje: string;
  registros: T[];
}

export interface Respuesta<T> {
  mensaje: string;
  registro: T
}

export interface RespuestaPaginada<T> {
  message: 'Exito',
  registros: T[],
  totalItems: number,
  currentPageSize: number
  totalPages: number,
  currentPageNumber: number,
}
