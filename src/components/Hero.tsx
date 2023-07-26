import Image from 'next/image';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import sax from '@/assets/sax.png';
import piano from '@/assets/piano.png';
import heroImg from '@/assets/hero-img.svg';
import drums from '@/assets/drums.png';
import clef from '@/assets/clef.png';
import arrowRight from '@/assets/arrow-right.svg';

export function Hero() {
  return (
    <main>
      <section className="pr-0 pb-64 border-black border-solid border-[0_1px_1px_1px] p-5">
        <Container className="container lg:flex-row-reverse">
          <Image
            src={heroImg}
            alt="Banda dee Jazz tocando"
            className="black max-w-full ml-auto mr-0 mt-5 mb-0"
          />

          <div>
            <h1 className="mt-2">
              Crie Algo
              <span className="text-primary block relative after:content-[''] after:bg-three after:-top-3 after:h-12 after:w-[40px]">
                impactante
              </span>
              com música
            </h1>
            <p className="mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Button className='relative after:content-[""] after:bg-arrow after:absolute after:top-20 after:-right-16 after:h-12 after:w-[132px]'>
              Comece agora
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-8 border-black border-solid border-[0_1px_1px_1px] p-5">
        <div className="flex flex-col items-start gap-5 -mt-32 mb-16 sm:flex-row sm:flex-wrap sm:justify-center">
          <article className="bg-primary border-2 border-solid border-black shadow-card max-w-[17rem]  pl-8 pr-0 pt-8 pb-0 sm:mt-4">
            <Image src={piano} alt="ícone de teclas de piano" />
            <strong className="block text-2xl mx-0 my-4">Piano popular</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>

            <a href="#" className="ml-auto mr-0 mt-12 mb-0 block w-fit">
              <Image src={arrowRight} alt="Ir para pagina do curso" />
            </a>
          </article>

          <article className="bg-secondary border-2 border-solid border-black shadow-card max-w-[17rem]  pl-8 pr-0 pt-8 pb-0 self-end sm:mt-4">
            <Image src={clef} alt="ícone de teclas de piano" />
            <strong className="block text-2xl mx-0 my-4">Teoria musical</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>

            <a href="#" className="ml-auto mr-0 mt-12 mb-0 block w-fit">
              <Image src={arrowRight} alt="Ir para pagina do curso" />
            </a>
          </article>

          <article className="bg-primary border-2 border-solid border-black shadow-card max-w-[17rem]  pl-8 pr-0 pt-8 pb-0 sm:mt-4">
            <Image src={sax} alt="ícone de teclas de piano" />
            <strong className="block text-2xl mx-0 my-4">Sax Alto</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>

            <a href="#" className="ml-auto mr-0 mt-12 mb-0 block w-fit">
              <Image src={arrowRight} alt="Ir para pagina do curso" />
            </a>
          </article>

          <article className="bg-secondary border-2 border-solid border-black shadow-card max-w-[17rem]  pl-8 pr-0 pt-8 pb-0 self-end sm:mt-4">
            <Image src={drums} alt="ícone de teclas de piano" />
            <strong className="block text-2xl mx-0 my-4">Bateria</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>

            <a href="#" className="ml-auto mr-0 mt-12 mb-0 block w-fit">
              <Image src={arrowRight} alt="Ir para pagina do curso" />
            </a>
          </article>
        </div>

        <h2 className="text-center">
          E <span className="text-primary">vários</span> outros!
        </h2>
        <Button navigateTo="#" className="mt-8 mx-auto">
          Conhecer os Cursos
        </Button>
      </section>
    </main>
  );
}
