import React from 'react';
import ownersA from '../assets/Mario and Adrian A.jpg';
import ownersB from '../assets/Mario and Adrian b.jpg';

export default function About() {
  return (
    <section className='story'>
    <article className='story-text'>
        <h2 className='story-title'>Little Lemon</h2>
        <h3 className='story-subtitle'>Chicago</h3>
        <p className='story-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.</p>
    </article>
    <aside className='owners'>
        <img className='owners-photo' src={ownersA} alt='owners'/>
        <img className='owners-photo' src={ownersB} alt='owners'/>
    </aside>
</section>
  )
}
