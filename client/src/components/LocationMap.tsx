import React from "react";
import { motion } from "framer-motion";

interface LocationMapProps {
    className?: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ className }) => {
    return (
        <div className={`relative w-full h-[400px] rounded-xl overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
            >
                <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=31.4865474,74.4134574&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    title="CQ Digital Studio Location"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                ></iframe>
            </motion.div>
        </div>
    );
};
