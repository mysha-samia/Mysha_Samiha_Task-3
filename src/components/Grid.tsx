import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { GridProps } from '../types';



export function Grid({ media }: GridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const slides = media.map(item => ({ src: item.src }));
  const gridClassName = `grid gap-2 ${
    media.length === 1 ? 'w-full h-96' : 'grid-cols-2 ' + (media.length === 2 ? 'h-80' : 'h-96')
  }`;

  return (
    <>
      <div className={gridClassName}>
        {media.map((item, index) => (
          <div
            key={item.src}
            className={`relative overflow-hidden rounded-lg cursor-pointer ${
              media.length > 2 && index === 0 ? 'row-span-2' : ''
            }`}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={item.src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
}