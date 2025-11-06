import Image from 'next/image';

export default function OptimizedImage({ src, alt, priority = false, ...props }) {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: props.height || '100%',
      ...props.style 
    }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: props.objectFit || 'cover',
        }}
        quality={props.quality || 75}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}