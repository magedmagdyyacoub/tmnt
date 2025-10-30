import Header from '../components/Header';
import Characters from '../components/characters';
import MutantMediaHighlights from '../components/MutantMediaHighlights';
import TMNTCharacterGallery from '../components/TMNTCharacterGallery';
import YouTubeVideo from '../components/YouTubeVideo';

import Footer from '../components/Footer';
export default function Home() {
  return (
    <>

      <Characters />
      <MutantMediaHighlights />
      <TMNTCharacterGallery />
      <YouTubeVideo title="TMNT Clip" />
    

    </>
  );
}
