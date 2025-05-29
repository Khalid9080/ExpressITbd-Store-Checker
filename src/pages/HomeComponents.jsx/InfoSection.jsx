import {
  FaShoppingCart,
  FaBoxOpen,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    title: "Easy Product Management",
    description: "Add, edit, and organize your products effortlessly with intuitive tools.",
    icon: <FaBoxOpen className="text-blue-600 size-6" />,
    bg: "bg-blue-100",
  },
  {
    title: "Customer Management",
    description: "Track your customers, their orders, and preferences all in one place.",
    icon: <FaUsers className="text-green-600 size-6" />,
    bg: "bg-green-100",
  },
  {
    title: "Secure Payment Options",
    description: "Accept payments with trusted gateways like Stripe, PayPal, and more.",
    icon: <FaLock className="text-purple-600 size-6" />,
    bg: "bg-purple-100",
  },
  {
    title: "Global Reach",
    description: "Sell worldwide with multi-language and multi-currency support.",
    icon: <FaGlobe className="text-yellow-600 size-6" />,
    bg: "bg-yellow-100",
  },
  {
    title: "Real-Time Analytics",
    description: "Gain insights into your sales performance and customer behavior.",
    icon: <FaChartLine className="text-red-600 size-6" />,
    bg: "bg-red-100",
  },
  {
    title: "Built-In Cart & Checkout",
    description: "Seamless shopping experience with optimized cart and checkout flows.",
    icon: <FaShoppingCart className="text-indigo-600 size-6" />,
    bg: "bg-indigo-100",
  },
];

const InfoSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl flex flex-col gap-12 px-8 pb-20 sm:px-0">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
          Build Your Dream Online Store
        </h2>
        <p className="mt-4 text-black text-md">
          Launch your own e-commerce website with ease. Manage your products,
          sales, and customers all in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="rounded-lg bg-white p-6 ring-8 ring-gray-900/5">
            <div
              className={`mb-4 flex size-12 items-center justify-center rounded-xl ${feature.bg}`}
            >
              {feature.icon}
            </div>
            <h4 className="mb-2 font-bold text-gray-950">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
   
    </section>
  );
};

export default InfoSection;
