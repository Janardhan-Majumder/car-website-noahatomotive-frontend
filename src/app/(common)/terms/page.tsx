import Container from "@/components/Container";
import { FiFileText, FiAlertCircle, FiCheckCircle, FiInfo } from "react-icons/fi";

export default function TermsPage() {
    const rules = [
        {
            title: "User Agreement",
            content: "By accessing or using NOAH, you agree to be bound by these terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
        },
        {
            title: "License Use",
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on NOAH's website for personal, non-commercial transitory viewing only."
        },
        {
            title: "Disclaimer",
            content: "The materials on NOAH's website are provided on an 'as is' basis. NOAH makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability."
        },
        {
            title: "Limitations",
            content: "In no event shall NOAH or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NOAH's website."
        }
    ];

    return (
        <div className="min-h-screen bg-white py-20 lg:py-32">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-20">
                        <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-[#0047FF] text-3xl mb-6">
                            <FiFileText />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Terms & Conditions</h1>
                        <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-6"></div>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl">
                            Please read these terms carefully before using our services. Your access and use of the platform are conditioned on your acceptance of and compliance with these Terms.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        {rules.map((rule, idx) => (
                            <div key={idx} className="flex gap-6 p-8 lg:p-10 rounded-[32px] border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all group">
                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#0047FF] text-xl group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
                                    <FiCheckCircle />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{rule.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {rule.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Box */}
                    <div className="mt-16 p-10 rounded-[40px] bg-[#090B13] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                                <FiInfo /> Governing Law
                            </div>
                            <p className="text-white/80 leading-relaxed text-lg">
                                These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="mt-12 text-center text-gray-400 text-sm font-medium">
                        If you have any questions regarding these terms, please contact us at support@noahautomotive.com
                    </div>
                </div>
            </Container>
        </div>
    );
}
