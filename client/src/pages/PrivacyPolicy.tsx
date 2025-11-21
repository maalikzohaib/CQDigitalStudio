import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-16 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                        <p className="mb-4">
                            At CQ Digital Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect or receive:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your orders.</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                        <p>
                            If you have questions or comments about this policy, you may email us at cqdigitelstudio@gmail.com.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
