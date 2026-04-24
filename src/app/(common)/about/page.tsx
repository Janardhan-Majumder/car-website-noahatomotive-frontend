import Container from "@/components/Container";
import Image from "next/image";
import { FiCheckCircle, FiTarget, FiUsers, FiAward } from "react-icons/fi";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] bg-[#090B13] flex items-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image 
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop" 
                        alt="Background" 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                
                <Container>
                    <div className="relative z-10 max-w-2xl">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Redefining the <span className="text-[#0047FF]">Automotive</span> Experience
                        </h1>
                        <p className="text-xl text-white/70 font-medium leading-relaxed">
                            NOAH is more than a marketplace. We are a cinematic destination for automotive enthusiasts, combining cutting-edge technology with uncompromising service standards.
                        </p>
                    </div>
                </Container>
            </div>

            {/* Mission & Vision */}
            <Container mClassName="py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0047FF] text-sm font-bold uppercase tracking-wider mb-6">
                            <FiTarget /> Our Mission
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Providing access to the world's finest automobiles through a seamless digital journey.
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Founded on the principle of excellence, NOAH has grown into a leading premium automotive marketplace. We believe that buying or selling a car should be as thrilling as the drive itself.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Verified Premium Inventory",
                                "Transparent Transaction Process",
                                "Dedicated Concierge Service",
                                "Innovative Digital Showroom"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-700 font-semibold">
                                    <FiCheckCircle className="text-[#0047FF] text-xl" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
                        <Image 
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop" 
                            alt="Luxury Car" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>

            {/* Stats / Why Us */}
            <div className="bg-gray-50 py-24">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">By the Numbers</h2>
                        <p className="text-gray-500 font-medium">Our commitment to excellence reflected in our growth and community trust.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: FiUsers, label: "Happy Clients", value: "10k+" },
                            { icon: FiAward, label: "Premium Cars", value: "500+" },
                            { icon: FiCheckCircle, label: "Certified Dealers", value: "120+" },
                            { icon: FiTarget, label: "Cities Reached", value: "45+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0047FF] text-2xl mx-auto mb-6">
                                    <stat.icon />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}
