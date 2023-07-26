import Image from 'next/image';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import logo from '@/assets/logo.svg';

export function Footer() {
  return (
    <footer className="border-b-0 pt-4 pb-16 px-5 border-black border-solid border-[0_1px_1px_1px] p-5">
      <Container>
        <div className="lg:flex-[2]">
          <Image src={logo} alt="Tom's Jazz School" className="mt-4 mb-4" />

          <p className="mb-8 lg:text-xl lg:max-w-[16rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <nav className="mb-8 lg:flex-1">
          <a href="#" className="block pl-0">
            Início
          </a>
          <a href="#" className="block pl-0">
            Cursos
          </a>
          <a href="#" className="block pl-0">
            Eventos
          </a>
          <a href="#" className="block pl-0">
            Contatos
          </a>
        </nav>

        <form className="lg:flex-[3]">
          <label htmlFor="email" className="mb-4 block text-2xl">
            Receba materiais gratuitos no seu email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mb-4 shadow-card text-2xl p-2 w-full border-2 border-solid border-black"
            placeholder="Digite o seu email"
          />
          <Button className="mb-8">Quero receber</Button>
        </form>
      </Container>
    </footer>
  );
}
