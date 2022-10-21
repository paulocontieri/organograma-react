import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspesa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Form foi submetido")
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar os dados do Colaborador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
        <Botao>
            Criar botão
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
