import Image from 'next/image';

import { Navigate } from '@/components/Navigate';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import logo from '@/assets/logo.svg';

export default function Header() {
  return (
    <header className="p-5 border-black border-[0_1px_1px_1px] border-solid">
      <Container className="md:flex md:items-center md:justify-between md:m-0">
        <Image src={logo} alt="Tom's Jazz School" className="block mx-auto my-4 md:m-0" />
        <nav className="grid grid-cols-[1fr_1fr] mt-4 mb-0 mx-auto sm:block sm:text-center">
          <Navigate url="#" className="text-right">
            Início
          </Navigate>
          <Navigate url="#">Cursos</Navigate>
          <Navigate url="#" className="text-right">
            Eventos
          </Navigate>
          <Navigate url="#">Contatos</Navigate>
        </nav>
        <Button className="mt-4 mb-4 mx-auto md:m-0">Se inscreva</Button>
      </Container>
    </header>
  );
}
