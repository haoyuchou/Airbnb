import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://www.dicasdeviagem.com/wp-content/uploads/2021/02/sitio-alto-padrao-1024x683.jpg.webp"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Banner;
