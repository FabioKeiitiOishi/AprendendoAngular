import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }
  getCursos = () => ['Java', 'ExtJS', 'Angular']
}
