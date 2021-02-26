import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("surveys_users")
class SurveyUser{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @Column()
  survey_id: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    // A função para gerar uuid's não vem ativada por padrão em algumas base de dados, por exemplo o postgres. Essa condicional está retirando essa responsabilidade do banco e passando para o código para que não haja erros futuros durante a inserção dos dados.
    if(!this.id){
      this.id = uuid();
    }
  }
}

export { SurveyUser };