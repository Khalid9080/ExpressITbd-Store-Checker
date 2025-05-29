const InfoSection = () => {
  const features = [
    {
      title: "Easy Setup",
      description: "Create and customize your store with just a few clicks, no coding required.",
    },
    {
      title: "SEO Friendly",
      description: "Boost your visibility with SEO optimized subdomains and product pages.",
    },
    {
      title: "Multiple Payment Options",
      description: "Accept payments worldwide with multiple secure payment gateways.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
