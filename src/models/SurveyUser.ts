import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser{

  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  survey_id: string;

  @ManyToOne(() => Survey)
  @JoinColumn({ name: "survey_id" })
  survey: Survey;

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