import { Container, Header, Icon } from 'semantic-ui-react';

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
            Disciplina: <strong>Desenvolvimento de Serviços Web e Testes com Java 🎉</strong>
          </li>
          <li>
            Professor: <strong>Elberth de Moraes</strong> 🤩
          </li>
          <li>
            Curso: <strong>Engenharia de Software</strong> 💻
          </li>
          <li>
            Local: <strong>Instituto Infnet</strong> 🎓
          </li>
          <li>
            API Java ☕ + Front-end React JS <Icon name="react" color="blue" /> = <strong>THE NEXT LEVEL</strong> 😂
          </li>
        </ul>
        <Header as="h2">O Projeto</Header>
        <p>
          O projeto <strong>HealU</strong> é um projeto idealizado para fornecer uma API que simula uma clinica médica.
          Através dessa API é possível realizar o cadatro, consulta e exclusão de dados de Pacientes, Médicos, Serviços
          e Atendimentos Médicos.
        </p>
        <p>
          Durante o desenvolvimento do projeto foi observada a oportunidade de criar um front-end para facilitar a
          interação com a API. Pensando nisso, desenvolvi uma aplicação utilizando <Icon name="react" color="blue" />
          <strong>React JS.</strong>
        </p>

        <Header as="h2">Repositórios</Header>
        <p>Reposito do back-end:</p>
        <p>Reposito do front-end:</p>

        <Header as="h2">Documentação</Header>
        <p>Link da documentação no Postman:</p>

        <Header as="h2">Features do back-end</Header>
        <p>
          A API do projeto foi desenvolvida utilizando a linguagem Java com o framework web Spark. Durante o
          desenvolvimento, foram identificadas diversas oportunidades de melhorias para uma melhor organização das rotas
          do projeto utilizando métodos do Spark, como por exemplo <code>Spark.before()</code>,{' '}
          <code>Spark.after()</code>,<code>Spark.options()</code> e <code>Spark.path()</code>. Além desses, também foi
          criada uma classe customizada para respostas HTTP que é utilizada para retornar os erros da API em um formato
          específico, com o auxílio do método <code>Spark.exception()</code>.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
          strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
          justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
          nisi.
        </p>
      </Container>
    </Container>
  );
}
