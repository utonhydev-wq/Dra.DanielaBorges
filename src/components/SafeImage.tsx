import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-[#EFE8DE] animate-pulse flex items-center justify-center">
          <span className="sr-only">Carregando imagem...</span>
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full min-h-[180px] bg-[#EDE5DA] border border-[#DFD3C3] flex flex-col items-center justify-center p-6 text-center text-[#8C6D58]">
          <div className="w-12 h-12 rounded-full bg-[#DFD3C3]/50 flex items-center justify-center mb-2">
            <ImageIcon className="w-6 h-6 text-[#8C6D58]" />
          </div>
          <p className="text-xs font-medium text-[#6B5543]">{fallbackText || alt || 'Imagem indisponível'}</p>
          <span className="text-[11px] text-[#A89078] mt-1">Dra. Daniela Borges</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          {...props}
        />
      )}
    </div>
  );
};
