import { useState } from 'react';
import './ImageWithFallback.css';

function ImageWithFallback({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);

  function handleError() {
    setImgSrc('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80');
  }

  return <img src={src} alt={alt} className={className}  />;
}

export default ImageWithFallback;
