import Container from "@/components/Container";
import ContactForm from "@/components/ui/ContactForm";
import { FiMapPin } from "react-icons/fi";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-[#090B13] py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
                <Container>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Get in <span className="text-[#0047FF]">Touch</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed font-medium">
                            Have a question about a vehicle or want to list your car? We're here to help you navigate the premium automotive world.
                        </p>
                    </div>
                </Container>
            </div>

            {/* Main Content */}
            <Container mClassName="pb-24 relative z-20">
                <div className="max-w-4xl mx-auto">
                    {/* Form Side */}
                    <div className="rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl shadow-blue-50/50 bg-white">
                        <div className="p-8 lg:p-12">
                            <div className="mb-10 text-center max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
                                <p className="text-gray-500 font-medium leading-relaxed">
                                    Fill out the form below and our specialist team will review your inquiry immediately.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="mt-10 h-[300px] rounded-[40px] bg-gray-100 overflow-hidden relative border border-white/10 shadow-xl group cursor-pointer">
                        <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                            <FiMapPin className="text-4xl text-[#0047FF] mb-4" />
                            <p className="font-bold text-gray-900">View Our Global Showrooms</p>
                            <p className="text-sm text-gray-500 mt-2">Opening soon in London, Dubai, and Tokyo.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

