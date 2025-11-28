import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CameraCategoryToggleProps {
    value: 'DSLR' | 'Mirrorless';
    onChange: (value: 'DSLR' | 'Mirrorless') => void;
}

export const CameraCategoryToggle = ({ value, onChange }: CameraCategoryToggleProps) => {
    return (
        <div className="flex justify-center w-full mb-10">
            <div className="relative flex items-center bg-muted p-1.5 rounded-full border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <button
                    onClick={() => onChange('DSLR')}
                    className={cn(
                        "relative z-10 px-8 py-3 text-base font-semibold transition-colors duration-200 rounded-full min-w-[160px]",
                        value === 'DSLR' ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {value === 'DSLR' && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-primary rounded-full shadow-md"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">DSLR (1080p)</span>
                </button>

                <button
                    onClick={() => onChange('Mirrorless')}
                    className={cn(
                        "relative z-10 px-8 py-3 text-base font-semibold transition-colors duration-200 rounded-full min-w-[160px]",
                        value === 'Mirrorless' ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {value === 'Mirrorless' && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-primary rounded-full shadow-md"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">Mirrorless (4K)</span>
                </button>
            </div>
        </div>
    );
};
