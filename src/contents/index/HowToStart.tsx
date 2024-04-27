import clsx from 'clsx';
import { useState } from 'react';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import ExplorationImage from '@/assets/images/exploration.jpg'
import AnalyzeImage from '@/assets/images/analyze.jpg'
import DevelopImage from '@/assets/images/develop.jpg'
import Image from 'next/image'

const content: Array<any> = [
  {
    state: 'exploration',
    title: 'Llamada de exploración',
    description: 'Nos encargamos de comunicarnos contigo para tener un primer acercamiento y conocerte mejor.',
  },
  {
    state: 'analyze',
    title: 'Análisis de tu negocio',
    description: 'Analizaremos tu negocio para encontrar puntos claves donde puedan haber oportunidades de mejora con nuestras soluciones y adaptarlas para tí.',
  },
  {
    state: 'develop',
    title: 'Comienzo del desarrollo',
    description: 'Se inicia con el desarrollo de la solución en base al análisis realizado y te entregamos avances constantemente para que nos des tu.',
  }
];


function HowToStart() {
  const [currentState, setCurrentState] = useState<any | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Proceso"
          caption="¿Cómo comenzamos?"
          description="El proceso que seguimos es muy simple y consta solamente de tres pasos."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
              {currentState && currentState.state === "exploration" && (
                 <Image
                 className={clsx('rounded-2xl shadow-xl')}
                 src={ExplorationImage}
                 width={500}
                 height={500}
                 alt="exploration"
               />
                )}
              {currentState && currentState.state === "analyze" && (
                 <Image
                 className={clsx('rounded-2xl shadow-xl')}
                 src={AnalyzeImage}
                 width={500}
                 height={500}
                 alt="analyze"
               />
                )}
                     {currentState && currentState.state === "develop" && (
                 <Image
                 className={clsx('rounded-2xl shadow-xl')}
                 src={DevelopImage}
                 width={500}
                 height={500}
                 alt="develop"
               />
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default HowToStart;
