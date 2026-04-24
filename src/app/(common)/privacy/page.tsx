import Container from "@/components/Container";
import { FiShield, FiLock, FiEye, FiServer } from "react-icons/fi";

export default function PrivacyPage() {
    const sections = [
        {
            title: "Information Collection",
            icon: FiEye,
            content: "We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, and payment method."
        },
        {
            title: "Data Security",
            icon: FiLock,
            content: "We take the security of your data seriously. We use a variety of technical and organizational measures to protect your information, including encryption and authentication tools. Your personal information is contained behind secured networks."
        },
        {
            title: "Use of Information",
            icon: FiShield,
            content: "We use the information we collect to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request, and develop new features."
        },
        {
            title: "Cookies & Tracking",
            icon: FiServer,
            content: "We use cookies and similar technologies to provide and support our services and each of the uses outlined in this policy. You can control cookies through your browser settings and other tools."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 py-20 lg:py-32">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-[#0047FF] text-3xl mx-auto mb-6 shadow-sm shadow-blue-100">
                            <FiShield />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">Last updated: April 2026</p>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8 lg:p-16 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At NOAH, we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by NOAH. By using our website, you signify your acceptance of our Privacy Policy.
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {sections.map((section, idx) => (
                                <div key={idx} className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0047FF] text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <section.icon />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <section className="pt-8 border-t border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <span className="font-bold text-[#0047FF] mt-2 block text-lg">privacy@noahautomotive.com</span>
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
