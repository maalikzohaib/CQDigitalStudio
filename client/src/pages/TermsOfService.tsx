import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <div className="pt-24 pb-16 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                        <p className="mb-4">
                            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CQ Digital Studio website operated by us.
                        </p>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Agreement to Terms</h2>
                        <p className="mb-4">
                            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                        </p>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Intellectual Property</h2>
                        <p className="mb-4">
                            The Service and its original content, features and functionality are and will remain the exclusive property of CQ Digital Studio and its licensors.
                        </p>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Links To Other Web Sites</h2>
                        <p className="mb-4">
                            Our Service may contain links to third-party web sites or services that are not owned or controlled by CQ Digital Studio.
                        </p>
                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Termination</h2>
                        <p className="mb-4">
                            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
