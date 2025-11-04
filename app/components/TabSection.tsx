"use client";

import { useState } from "react";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "benefits", label: "Benefits" },
    { id: "documents", label: "Documents" },
    { id: "education", label: "Education & Training" },
  ];

  return (
    <div className="bg-white">
      {/* Tabs Navigation */}
      <div className="border-b-2 border-gray-200 sticky top-[120px] bg-white z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-5 font-semibold whitespace-nowrap transition-all duration-200 text-base ${
                  activeTab === tab.id
                    ? "text-[#18274a] border-b-4 border-[#18274a] -mb-0.5"
                    : "text-gray-600 hover:text-[#18274a] hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === "overview" && <OverviewContent />}
        {activeTab === "features" && <FeaturesContent />}
        {activeTab === "benefits" && <BenefitsContent />}
        {activeTab === "documents" && <DocumentsContent />}
        {activeTab === "education" && <EducationContent />}
      </div>
    </div>
  );
}

function OverviewContent() {
  return (
    <div className="space-y-20">
      {/* Personalized Ventilation Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#18274a] mb-6 leading-tight">
            Personalized ventilation for better outcomes
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            As our most advanced ventilator, Servo-u builds on more than 50
            years of groundbreaking innovations. It features unique decision
            support tools such as Transpulmonary pressure, Open Lung Tool, Servo
            Compass®, Stress Index, and Edi – the electrical activity of the
            diaphragm. Crucially, it also comes with our unique NAVA ventilation
            mode. In other words, an all-in-one solution where there's no need
            to switch ventilators or devices.
          </p>
          <button className="bg-[#18274a] text-white px-8 py-4 rounded-md hover:bg-[#233861] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Learn more
          </button>
        </div>
        <div className="bg-gray-100 aspect-video rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/nava-and-nps-waveforms-and-x-ray-man-900x600.jpg"
            alt="NAVA visualization"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Neural Pressure Support */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-gray-100 aspect-video rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/nava-and-nps-waveforms-and-x-ray-man-900x600.jpg"
              alt="Neural Pressure Support"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold text-[#18274a] mb-6 leading-tight">
            Neural Pressure Support (NPS) and NIV NPS
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            NPS and NIV NPS is a complement to NAVA and NIV NAVA, delivering
            time-synchronized pressure support (PS), where both breath
            triggering and flow termination are based on the patient's neural
            respiratory drive. NPS may help reduce the incidence of premature
            expiratory cycling and harmful eccentric diaphragm contractions,
            which are common with conventional flow-cycled PS.
          </p>
          <button className="bg-[#18274a] text-white px-8 py-4 rounded-md hover:bg-[#233861] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Neural Pressure Support
          </button>
        </div>
      </section>

      {/* Servo TwinView */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#18274a] mb-6 leading-tight">
            Servo TwinView - a virtual twin of Servo-u ventilator
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Servo TwinView provides remote near real-time data from your Servo-u
            and Servo-n ventilators. Irrespective on where you access Servo
            TwinView, the information is presented in the same way as on the
            ventilator.
          </p>
          <ul className="list-disc list-inside space-y-3 mb-8 text-lg text-gray-700">
            <li>More effective rounding and handover</li>
            <li>Remote second opinions and support</li>
            <li>Support for onboarding and training</li>
            <li>Reduced patient disturbance</li>
          </ul>
          <button className="bg-[#18274a] text-white px-8 py-4 rounded-md hover:bg-[#233861] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Servo TwinView
          </button>
        </div>
        <div className="bg-gray-100 aspect-video rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://www.getinge.com/siteassets/start/campaigns/servo-twin-view/doctor-pointing-at-twinview-dashboard-on-wall-display-scren-for-icu-ward-rouding-800x600.jpg"
            alt="Servo TwinView"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Three Column Features */}
      <section className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-gray-100 aspect-video overflow-hidden">
            <img
              src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/servo-u-ventilator-ease-of-use-750x500.jpg"
              alt="Ease of use"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#18274a] mb-4">
              Ease of use
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Servo ventilators are built on more than 50 years of close
              collaboration with intensive care clinicians around the world. The
              result is continuous innovation, higher levels of patient safety
              and a superior user experience.
            </p>
            <button className="text-[#18274a] font-semibold hover:underline text-lg">
              Read more →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-gray-100 aspect-video overflow-hidden">
            <img
              src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/personalized-lung-protection.880x600.jpg"
              alt="Personalized lung protection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#18274a] mb-4">
              Personalized lung protection
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Servo-u offers you the complete toolkit for personalized
              ventilation. It enables you to detect risks early and support
              timely and consistent implementation of personalized protective
              ventilation strategies.
            </p>
            <button className="text-[#18274a] font-semibold hover:underline text-lg">
              Read more →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="bg-gray-100 aspect-video overflow-hidden">
            <img
              src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/personalized-weaning.880x600.jpg"
              alt="Personalized weaning"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#18274a] mb-4">
              Personalized weaning
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Recent clinical studies reveal that diaphragm weakness is
              prevalent (23–84%) in ICU patients and consistently associated
              with poor outcome. Servo-u lets you monitor the patient's
              diaphragm activity (Edi) to personalize ventilation.
            </p>
            <button className="text-[#18274a] font-semibold hover:underline text-lg">
              Read more →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturesContent() {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-[#18274a]">Features</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          title="Context-based guidance"
          description="Servo-u provides informative guidance for everything from pre-use check to initial parameter setting and throughout the entire treatment."
          image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/context-based-guidance-750-500.jpg"
        />
        <FeatureCard
          title="Safety Scale parameters"
          description="The system Safety Scale tool makes parameter changes quick and intuitive, while dynamic images illustrate how those changes may affect ventilation."
          image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/safety-scale-parameters-750-500.jpg"
        />
        <FeatureCard
          title="Choose your view"
          description="Basic, Advanced and Loops • Distance and Family • Servo Compass and Pes & PL"
          image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/choose-your-view-750-500.jpg"
        />
        <FeatureCard
          title="Alarm management"
          description="The frame lights up when an alarm is triggered, and this visual signal is easy to see from any view point. On-screen checklists help you to manage each active alarm."
          image="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/alarm-management-750-500.jpg"
        />
      </div>
    </div>
  );
}

function BenefitsContent() {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-[#18274a]">Benefits</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-[#18274a] mb-6">
            Personalized lung protection, breath by breath
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Recent clinical studies suggest that many ventilators lack effective
            bedside decision-support tools. It's a problem that results in
            protective ventilation strategies being delayed or inconsistently
            applied. To avoid these situations, Servo-u offers you the complete
            toolkit for personalized ventilation.
          </p>
        </div>
        <div className="bg-gray-100 aspect-video rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://www.getinge.com/siteassets/start/product-catalog/servo-u-mechanical-ventilator/personalized-weaning.880x600.jpg"
            alt="Benefits"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-[#18274a] mb-6">
          A sustainable solution based on efficiency and responsibility
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Servo-u is a sustainable solution on multiple levels: Fewer parts that
          are long-lasting and easy to reprocess sourced responsibly,
          interchangeable with other Servos and always supporting your uptime. A
          flexible, modular platform that can be easily upgraded for your
          evolving clinical needs.
        </p>
      </div>
    </div>
  );
}

function DocumentsContent() {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-[#18274a]">Documents</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-[#18274a] mb-6">
            Marketing Sales - Brochures
          </h3>
          <div className="space-y-4">
            <DocumentLink
              title="Servo-u ventilator system"
              description="Servo-u gives you many options for personalized lung protection and weaning, for treatment of all patient categories."
            />
            <DocumentLink
              title="Personalized lung protection tools"
              description="The physiological challenges of mechanical ventilation requires a powerful toolkit, offering the right protection for each patient at the right time."
            />
            <DocumentLink
              title="NAVA, NIV NAVA and Edi monitoring"
              description="Achieve faster personalized weaning with lung and diaphragm-protective ventilation."
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#18274a] mb-6">
            Marketing Sales - Sales Flyer
          </h3>
          <div className="space-y-4">
            <DocumentLink
              title="Servo-u ventilator functionalities"
              description="Expand the performance of your flexible Servo-u with additional functionalities and features."
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#18274a] mb-6">
            Marketing Sales - Data Sheet
          </h3>
          <div className="space-y-4">
            <DocumentLink
              title="Edi catheter ENFit"
              description="Detect electrical activity of diaphragm, with our range of Edi catheters, enabling NAVA and NIV NAVA ventilation modes."
            />
            <DocumentLink
              title="Pes catheter ENFit"
              description="The NutriVent is a nasogastric feeding tube with one or two balloons for monitoring of esophageal, transpulmonary and gastric pressures."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-[#18274a]">
        Education & Training
      </h2>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-[#18274a] mb-6">
          Visit our Academy – training and education designed to enhance your
          proficiency
        </h3>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          For more information about our onsite events or remote trainings, you
          can also contact your local sales & service representative.
        </p>
        <button className="bg-[#18274a] text-white px-8 py-4 rounded-md hover:bg-[#233861] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Explore training content for Servo-u Mechanical Ventilator
        </button>
      </div>
    </div>
  );
}

function FeatureCard({
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
        <h3 className="text-2xl font-bold text-[#18274a] mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function DocumentLink({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-2 border-gray-200 p-6 rounded-lg hover:border-[#18274a] hover:shadow-md transition-all cursor-pointer bg-white">
      <h4 className="font-bold text-[#18274a] mb-3 text-lg">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
