import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  public data = [
    {
      "codigo_evento": "TECH1901",
      "nome_evento": "Techweek 2019",
      "codigo_oficina": "ABC1234",
      "nome_oficina": "Introdução ao Desenvolvimento de aplicações Web com Genexus",
      "local_oficina": "Laboratório 3",
      "nome_instrutor_oficina": "José Nelson Cultri",
      "data_inicio_oficina": "2019-06-18 19:00:00",
      "data_termino_oficina": "2019-06-18 22:30:00",
      "intervalo_inicio_oficina": 10,
      "intervalo_final_oficina": 10
    },
    {
      "codigo_evento": "TECH1901",
      "nome_evento": "Techweek 2019",
      "codigo_oficina": "DEF5678",
      "nome_oficina": "Iniciando em Análise de Dados",
      "local_oficina": "Laboratório 1",
      "nome_instrutor_oficina": "Eduardo Rabelo",
      "data_inicio_oficina": "2019-06-18 21:00:00",
      "data_termino_oficina": "2019-06-18 22:15:00",
      "intervalo_inicio_oficina": 10,
      "intervalo_final_oficina": 10
    }
  ];

  /**
   * Retorna false se a oficina não existe ou
   * retorna o objeto da oficina se ela existe
   * @param codigoOficina string
   */
  public findOficina(codigoOficina) {

    let indexOficina = this.data.findIndex(el => el.codigo_oficina === codigoOficina);
    return ( indexOficina === -1 ) ? false : this.data[indexOficina];

  }

  /**
   * Retorna true se o horário atual está de acordo
   * com a janela temporal do objeto passado, caso
   * contrário, retorna false
   * @param oficina object
   */
  public checkTime(oficina) {
    // Datas
    let currentDate = new Date();
    let dataInicio  = new Date(oficina.data_inicio_oficina);
    let dataTermino = new Date(oficina.data_termino_oficina);

    // Altera os minutos das datas de acordo com o intervalo de cada uma
    dataInicio.setMinutes(
      dataInicio.getMinutes() - oficina.intervalo_inicio_oficina
    );
    dataTermino.setMinutes(
      dataTermino.getMinutes() + oficina.intervalo_final_oficina
    );

    // Retorna true or false se o data atual está entre a data de inicio e de termino
    return currentDate > dataInicio && currentDate < dataTermino;
  }

}
