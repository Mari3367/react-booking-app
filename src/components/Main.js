import React from 'react';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import Story from './Story';
import Header from './Header';

export default function Main() {
  return (
    <main>
      <Header/>
      <Highlights />
      <Testimonials />
      <Story />
    </main>
  )
}
