import Header from "./components/Header";
import Footer from "./components/Footer";
import TabSection from "./components/TabSection";
import RelatedProducts from "./components/RelatedProducts";
import TranslationButton from "./components/TranslationButton";
import TranslationPanel from "./components/TranslationPanel";
import GlossaryDebugger from "./components/GlossaryDebugger";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="text-sm text-gray-600">
              <a
                href="#"
                className="hover:text-[#18274a] transition-colors font-medium"
              >
                All products
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#18274a] mb-8 leading-tight">
                Servo-u Mechanical Ventilator
              </h1>
              <p className="text-2xl md:text-3xl text-gray-800 mb-6 font-light leading-relaxed">
                Servo-u gives you many options for personalized lung protection
                and weaning.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All are easy to understand, implement and use, making it simple
                to integrate advanced personalized ventilation strategies into
                your daily patient care.
              </p>
              <p className="text-sm text-gray-600 mb-10 leading-relaxed">
                *The Servo ventilator and and/or ventilator options presented on
                this page may be pending regulatory approvals to be marketed in
                your country. Contact your Getinge representative for more
                information.
              </p>
              <button className="bg-[#18274a] text-white px-10 py-4 rounded-md hover:bg-[#233861] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Questions about Servo-u
              </button>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="bg-white py-16 md:py-20 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-ventilator-1280x1280-1.jpg"
                  alt="Getinge Servo-u Ventilator close up"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-ventilator-1767x1280-2.jpg"
                  alt="Servo-u ventilator"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-ventilator-1280x1280-3.jpg"
                  alt="Servo-u ventilator full view"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <TabSection />

        {/* Video Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#18274a] mb-8 text-center">
                Intuitive touchscreen
              </h2>
              <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
                The intuitive touchscreen makes Servo-u a breeze to learn and
                use. Information texts, dynamic images and workflow support help
                staff to orientate quickly and follow guidelines.
              </p>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 mx-auto mb-4 opacity-80"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <p className="text-lg font-medium opacity-80">
                      Video Player
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flexibility Section */}
        <section className="bg-white py-20 md:py-24 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#18274a] mb-8">
                Flexibility through ergonomic design
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Servo-u features an ergonomic design. The screen can be rotated
                through 360°, which means you can place the ventilator anywhere
                around the bed, depending on clinical requirements. You can also
                mount Servo-u on a ceiling supply unit or shelf. The system is
                light and compact, making it highly suitable for intra-hospital
                transport.
              </p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <RelatedProducts />

        {/* Lung Protection Tools Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18274a] mb-12 text-center">
              Protect the lungs and other organs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProtectionCard
                title="Servo Compass"
                description="Servo Compass makes it easy to see when plateau/driving pressure or tidal volume per predicted body weight (VT/PBW) are off pre-defined targets and interventions are needed."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-compass-750-500.jpg"
              />
              <ProtectionCard
                title="Transpulmonary pressure"
                description="To simplify esophageal manometry and improve accuracy, we have developed an automatic maneuver to validate balloon positioning and filling."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-transpulmonary-pressure-illustration-750x500pix.jpg"
              />
              <ProtectionCard
                title="Open Lung Tool"
                description="Open Lung Tool trends helps you assess lung mechanics and gas exchange – breath-by-breath, in real time and retrospectively."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/open-lung-tool-750-500.jpg"
              />
              <ProtectionCard
                title="Automatic recruitment maneuvers"
                description="Auto SRM is an automatic workflow for Stepwise recruitment maneuvers based on the Open Lung approach."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/automatic-recruitment-maneuvers-750-500.jpg"
              />
            </div>
          </div>
        </section>

        {/* Weaning Section */}
        <section className="bg-white py-20 md:py-24 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#18274a] mb-12 text-center">
              Wean early with an active diaphragm
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <WeaningCard
                title="Target protective tidal volumes"
                description="PRVC is a true volume-targeted mode that automatically adapts the inspiratory pressure to account for rapid changes in lung mechanics."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/tidal-volumes-750-500.jpg"
              />
              <WeaningCard
                title="Ease the transition to spontaneous breathing"
                description="The interactive Automode eases the transition to spontaneous breathing for patients and staff. It switches seamlessly between controlled and supported modes depending on patient effort."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-screen-750-500.jpg"
              />
              <WeaningCard
                title="Diagnose breathing and start weaning"
                description="Edi – the vital sign of respiration – is a bedside diagnostic tool that allows you to monitor and safeguard the patients diaphragm activity."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/diagnose-breathing-750-500.jpg"
              />
            </div>
          </div>
        </section>

        {/* Additional Therapies */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10">
              <TherapyCard
                title="High-flow therapy"
                description="High-flow therapy that reduces the patient's work of breathing through an accurate flow of heated and humidified oxygen, improving comfort and tolerance."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-2.1-high-flow-en-nonus-750x500.jpg"
              />
              <TherapyCard
                title="Soothing Heliox therapy"
                description="Heliox is our therapy option for patients having difficulty breathing due to airway resistance associated with various types of respiratory disease."
                image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/laminar-flow-2-750-500.jpg"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Translation Widget */}
      <TranslationButton />
      <TranslationPanel />

      {/* Glossary Debugger - Remove this in production */}
      <GlossaryDebugger />
    </div>
  );
}

function ProtectionCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gray-100 aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#18274a] mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function WeaningCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gray-100 aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#18274a] mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TherapyCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="bg-gray-100 aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-bold text-[#18274a] mb-4">{title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
