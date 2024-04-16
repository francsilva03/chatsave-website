import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'typography',
    shows: ['typography'],
    title: 'Automatización inteligente para la eficiencia empresarial',
    description: 'Reduce la carga de trabajo de tus empleados al automatizar tareas repetitivas con IA.',
  },
  {
    state: 'spacing',
    shows: ['typography', 'spacing'],
    title: 'Generación continua de clientes potenciales',
    description: 'Brinda atención personalizada las 24 horas del día, los 7 días de la semana, para resolver dudas y captar nuevos clientes de manera efectiva.',
  },
  {
    state: 'colors',
    shows: ['typography', 'spacing', 'colors'],
    title: 'Optimización de recursos y reducción de costos',
    description: 'Ahorra en costos operativos al implementar sistemas de automatización que optimizan recursos y procesos de manera eficiente.',
  },
  {
    state: 'effects',
    shows: ['typography', 'spacing', 'colors', 'effects'],
    title: 'Mejora de la experiencia del cliente y tasas de conversión',
    description: 'Aumenta la satisfacción del cliente y las tasas de conversión mediante respuestas rápidas y precisas, gracias a nuestra automatización inteligente de IA.',
  },
];


function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Nuestra misión es elevar su negocio"
          caption="¿Por que una agencia de automatización de IA?"
          description="Somos expertos en tecnología con una sólida experiencia en empresas líderes. Nuestro enfoque está en automatizar tus procesos para que puedas dedicar tu tiempo a lo que realmente importa: hacer crecer tu negocio."
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
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects']
                  }
                  title="UI Implementation"
                  description="Start creating UI components using React and Tailwind CSS."
                  date="10:00 AM · Tomorrow"
                  tag1="Design"
                  tag2="Components"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
