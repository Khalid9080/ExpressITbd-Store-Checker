const CallToActionSection = ({ onClick }) => {
  return (
    <section className="px-6 text-black text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to start your online store?</h2>
      <p className="mb-6 max-w-xl mx-auto">
        Join thousands of entrepreneurs using our platform to grow their businesses.
      </p>
      <button
        onClick={onClick}
        className="bg-purple-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 hover:text-black hover:scale-105 transition-transform"
      >
        Create Your Store Now
      </button>
    </section>
  );
};

export default CallToActionSection;
