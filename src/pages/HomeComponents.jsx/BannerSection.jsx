const BannerSection = () => {
  return (
    <section
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/b54e9be7-b81f-440d-bfb5-37f47a49efb4.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className="relative text-white text-3xl md:text-5xl font-bold z-10 px-4 text-center max-w-4xl">
        Create Your Storefront in Minutes, Start Selling Today!
      </h2>
    </section>
  );
};

export default BannerSection;
