import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function CookieSettings() {
    const { toast } = useToast();
    const [settings, setSettings] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    const handleSave = () => {
        toast({
            title: "Settings Saved",
            description: "Your cookie preferences have been updated.",
        });
    };

    return (
        <div className="pt-24 pb-16 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Cookie Settings</h1>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Manage your cookie preferences here. Essential cookies are always enabled to ensure the website functions properly.
                    </p>

                    <div className="space-y-8 bg-card border border-border/50 rounded-xl p-8">
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex-1">
                                <Label htmlFor="necessary" className="text-lg font-semibold block mb-1">Necessary Cookies</Label>
                                <p className="text-sm text-muted-foreground">
                                    These cookies are essential for the website to function properly and cannot be disabled.
                                </p>
                            </div>
                            <Switch id="necessary" checked={true} disabled />
                        </div>

                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex-1">
                                <Label htmlFor="analytics" className="text-lg font-semibold block mb-1">Analytics Cookies</Label>
                                <p className="text-sm text-muted-foreground">
                                    Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                </p>
                            </div>
                            <Switch
                                id="analytics"
                                checked={settings.analytics}
                                onCheckedChange={(checked) => setSettings(prev => ({ ...prev, analytics: checked }))}
                            />
                        </div>

                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex-1">
                                <Label htmlFor="marketing" className="text-lg font-semibold block mb-1">Marketing Cookies</Label>
                                <p className="text-sm text-muted-foreground">
                                    Used to track visitors across websites to display ads that are relevant and engaging.
                                </p>
                            </div>
                            <Switch
                                id="marketing"
                                checked={settings.marketing}
                                onCheckedChange={(checked) => setSettings(prev => ({ ...prev, marketing: checked }))}
                            />
                        </div>

                        <div className="pt-4">
                            <Button onClick={handleSave} className="w-full md:w-auto">
                                Save Preferences
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
