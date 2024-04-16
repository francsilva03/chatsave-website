import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <SectionTitle
        title="Adaptados a cualquier tipo de negocio"
        caption="Servicios"
        description="Podemos ofrecer varios tipos de servicios adaptados a tu negocio y evolucionar de manera proporcional en la medida en que creces."
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Automatización inteligente para la eficiencia empresarial"
                description="Reduce la carga de trabajo de tus empleados al automatizar tareas repetitivas con IA."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="Generación continua de clientes potenciales"
                description="Brinda atención personalizada las 24 horas del día, los 7 días de la semana, para resolver dudas y captar nuevos clientes de manera efectiva."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
             <SectionButton
                title="Optimización de recursos y reducción de costos"
                description="Ahorra en costos operativos al implementar sistemas de automatización que optimizan recursos y procesos de manera eficiente."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
                 <SectionButton
                title="Mejora de la experiencia del cliente y tasas de conversión"
                description="AAumenta la satisfacción del cliente y las tasas de conversión mediante respuestas rápidas y precisas, gracias a nuestra automatización inteligente de IA."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: '',
                      title: 'enjidev/tailwindcss-accent - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: '',
                      title: 'tailwindcss-accent - npm',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="enjidev"
                      license="MIT"
                      repository="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                    />
                  )}
                  {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;