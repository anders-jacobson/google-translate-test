export default function RelatedProducts() {
  const products = [
    { name: "Servo-u MR Conditional Ventilator", link: "#" },
    { name: "Servo-n Neonatal Ventilator", link: "#" },
    { name: "Servo-c Mechanical Ventilator", link: "#" },
    { name: "Servo-air Mechanical Ventilator", link: "#" },
    { name: "Servo-air NIV Mechanical Ventilator", link: "#" },
    { name: "NAVA", link: "#" },
    { name: "Servo TwinView - Remote Ventilator Viewing", link: "#" },
    { name: "Servo-i Mechanical Ventilator", link: "#" },
  ];

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#18274a] mb-12">
          Related products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="block p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border-2 border-gray-200 hover:border-[#18274a] shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              <h3 className="font-bold text-[#18274a] hover:underline text-lg leading-snug">
                {product.name}
              </h3>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="text-[#18274a] font-semibold hover:underline text-lg">
            View all →
          </button>
        </div>
      </div>
    </section>
  );
}
