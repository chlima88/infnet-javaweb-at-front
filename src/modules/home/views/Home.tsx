import { Container, Header, Icon } from 'semantic-ui-react';

import image1 from 'assets/images/feature1.png';
import image2 from 'assets/images/feature2.png';

export function Home() {
  return (
    <Container>
      <Header as="h1" color="teal">
        <Icon name="react" />
        HealU - Health Solution
      </Header>

      <Container text textAlign="justified">
        <Header as="h2">TLDR;</Header>
        <ul>
          <li>
            Disciplina: <strong>Desenvolvimento de Serviços Web e Testes com Java </strong>
          </li>
          <li>
            Aluno: <strong>Charles Lima</strong> 🎓
          </li>
          <li>
            Professor: <strong>Elberth de Moraes</strong> 🤩
          </li>
          <li>
            Curso: <strong>Engenharia de Software</strong> 💻
          </li>
          <li>
            Local: <strong>Instituto Infnet</strong>
          </li>
          <li>
            API Java ☕ + Front-end React JS <Icon name="react" color="blue" /> = <strong>THE NEXT LEVEL</strong> 😂
          </li>
        </ul>
        <Header as="h2">O Projeto</Header>
        <p>
          O projeto <strong>HealU</strong> é um projeto idealizado para fornecer uma API que simula uma clínica médica.
          Através dessa API é possível realizar o cadatro, consulta e exclusão de dados de Pacientes, Médicos, Serviços
          e Agendamentos de serviços Médicos.
        </p>
        <p>
          Durante o desenvolvimento do projeto foi observada a oportunidade de criar um front-end para facilitar a
          interação com a API. Pensando nisso, desenvolvi uma aplicação utilizando <Icon name="react" color="blue" />
          <strong>React JS.</strong>
        </p>

        <Header as="h2">Repositórios</Header>
        <p>
          Repositório do back-end:{' '}
          <a target="_blank" href="https://github.com/chlima88/infnet-javaweb-at">
            https://github.com/chlima88/infnet-javaweb-at
          </a>
        </p>
        <p>
          Repositório do front-end:{' '}
          <a target="_blank" href="https://github.com/chlima88/infnet-javaweb-at-front">
            https://github.com/chlima88/infnet-javaweb-at-front
          </a>
        </p>

        <Header as="h2">Documentação</Header>
        <p>Link da documentação no Postman:</p>
        <p>
          <a href="https://documenter.getpostman.com/view/33461895/2sA35JzfQq#51b5bc19-7dd0-4997-a468-c55949a1ff3e">
            https://documenter.getpostman.com/view/33461895/2sA35JzfQq#51b5bc19-7dd0-4997-a468-c55949a1ff3e
          </a>
        </p>

        <Header as="h2">Features</Header>
        <p>
          A API do projeto foi desenvolvida utilizando a linguagem Java com o framework web Spark. Durante o
          desenvolvimento, foram identificadas diversas oportunidades de melhorias. Algumas delas são apresentadas a
          seguir.
        </p>
        <p>
          Para uma melhor organização das rotas do projeto utilizando métodos do Spark, como por exemplo{' '}
          <code>Spark.before()</code>, <code>Spark.after()</code>, <code>Spark.options()</code>{' '}
          <code>Spark.path()</code> e <code>Spark.exception()</code>.
        </p>
        <p>
          <img src={image1} />
        </p>
        <p>
          Por falar em <code>Spark.exception()</code>, também foi criada uma classe <code>HttpResponse</code> que é
          responsável por retornar os erros da API em um formato específico quando alguma exceção é lançada.
        </p>
        <img src={image2} />
      </Container>
    </Container>
  );
}
