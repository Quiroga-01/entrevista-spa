export interface RespuestaGets<T> {
  mensaje: string;
  registros: T[];
}

export interface RespuestaPost<T> {
  mensaje: string;
  registro: T
}
