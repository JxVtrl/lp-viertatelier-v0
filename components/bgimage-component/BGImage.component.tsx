import Image from "next/image";

const BGImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        style={{ objectFit: "cover" }}
        loading="eager"
      />
    </div>
  );
};

export default BGImage