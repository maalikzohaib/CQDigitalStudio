import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CameraCategoryToggleProps {
    value: 'DSLR' | 'Mirrorless';
    onChange: (value: 'DSLR' | 'Mirrorless') => void;
}

export const CameraCategoryToggle = ({ value, onChange }: CameraCategoryToggleProps) => {
    return (
        <div className="flex justify-center w-full mb-8">
            <div className="relative flex items-center bg-muted/50 p-1 rounded-full border border-border/50">
                <button
                    onClick={() => onChange('DSLR')}
                    className={cn(
                        "relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full min-w-[140px]",
                        value === 'DSLR' ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground/80"
                    )}
                >
                    {value === 'DSLR' && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-primary rounded-full shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">DSLR (1080p)</span>
                </button>

                <button
                    onClick={() => onChange('Mirrorless')}
                    className={cn(
                        "relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full min-w-[140px]",
                        value === 'Mirrorless' ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground/80"
                    )}
                >
                    {value === 'Mirrorless' && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-primary rounded-full shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">Mirrorless (4K)</span>
                </button>
            </div>
        </div>
    );
};
