import React from 'react';

// Components
import C1 from '../../C1';
import C2 from '../../C2';
import C3 from '../../C3';
import C4 from '../../C4';
import C5 from '../../C5';

export default function Home(props) {
  const data = props.data;

  return (
    <div className='canvas-container'>
      <div className="canvas-main">
          {/* Top Navigation/OPENER */}
          <section>
            <C1 data={data.C1}/>
            {/* Contact section */}
            <section>
              <C5 data={data.C5}/>
            </section>
          </section>
          {/* Info on my current languages/software */}
          <section className='sub-canvas-0'>
            <C2 data={data.C2}/>
          </section>
          {/* Section on where I currently attend */}
          <section>
            <C3 data={data.C3}/>
          </section>
          {/* Section on my work completed */}
          <section className='sub-canvas-0'>
            <C4 data={data.C4}/>
          </section>
      </div>
    </div>
  );
}
