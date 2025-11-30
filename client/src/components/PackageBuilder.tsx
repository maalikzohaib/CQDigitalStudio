import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CameraCategoryToggle } from '@/components/CameraCategoryToggle';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { SlideInButton } from '@/components/ui/SlideInButton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Check, Camera, Video, Image as ImageIcon, BookOpen, Plane, Phone } from 'lucide-react';

type Category = 'DSLR' | 'Mirrorless';
type Brand = 'Canon' | 'Nikon' | 'Sony';
type AlbumType = 'None' | 'Indian' | 'Glass Window' | 'Box';

const PRICING = {
    DSLR: {
        video: {
            1: 10000,
            2: 18000,
        },
        photo: {
            1: 5000,
            2: 10000,
        },
        drone: 8000, // Per day
        albums: {
            'None': 0,
            'Indian': 10000,
            'Glass Window': 12000,
            'Box': 15000,
        },
    },
    Mirrorless: {
        video: {
            1: 20000,
            2: 40000,
        },
        photo: {
            1: 12000,
            2: 22000,
        },
        drone: 10000,
        albums: {
            'None': 0,
            'Indian': 10000,
            'Glass Window': 12000,
            'Box': 15000,
        },
    },
};

export const PackageBuilder = () => {
    const [category, setCategory] = useState<Category>('DSLR');
    const [brand, setBrand] = useState<Brand>('Canon');
    const [days, setDays] = useState<number>(1);

    const [videoCamCount, setVideoCamCount] = useState<number>(0);
    const [photoCamCount, setPhotoCamCount] = useState<number>(0);

    const [albumType, setAlbumType] = useState<AlbumType>('None');
    const [albumCount, setAlbumCount] = useState<number>(0);

    const [droneEnabled, setDroneEnabled] = useState<boolean>(false);

    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        calculatePrice();
    }, [category, days, videoCamCount, photoCamCount, albumType, albumCount, droneEnabled]);

    const calculatePrice = () => {
        let total = 0;
        const pricing = PRICING[category];

        // Video Camera Cost
        // If count is 1 or 2, use specific pricing. If > 2, extrapolate linearly based on 1 cam price for simplicity or cap.
        // Prompt only gave 1 and 2. I'll assume linear for > 2 based on 1 cam price if I allowed it, 
        // but I'll restrict UI to 1 or 2 for Video to be safe, or just 1 and 2.
        // Actually, let's just support 1 and 2 as per prompt.
        const videoDaily = pricing.video[videoCamCount as 1 | 2] || (pricing.video[1] * videoCamCount);
        total += videoDaily * days;

        // Photo Camera Cost
        // Updated logic to handle tiered pricing for both DSLR and Mirrorless
        if (photoCamCount > 0) {
            const photoDaily = pricing.photo[photoCamCount as 1 | 2] || (pricing.photo[1] * photoCamCount);
            total += photoDaily * days;
        }

        // Drone Cost
        if (droneEnabled) {
            total += pricing.drone * days;
        }

        // Album Cost (Flat fee, not per day)
        total += pricing.albums[albumType] * albumCount;

        setTotalPrice(total);
    };

    const handleContact = () => {
        const phoneNumber = '923004266312';
        const message = encodeURIComponent(
            `Hi! I'm interested in a custom ${category} package:\n` +
            `- Brand: ${brand}\n` +
            `- Duration: ${days} Day(s)\n` +
            `- Video Cameras: ${videoCamCount}\n` +
            `- Photo Cameras: ${photoCamCount}\n` +
            `- Albums: ${albumCount} (${albumType})\n` +
            `- Drone: ${droneEnabled ? 'Yes' : 'No'}\n` +
            `- Estimated Price: PKR ${totalPrice.toLocaleString()}\n\n` +
            `Can we discuss this?`
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <section className="py-16 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Build Your Custom Package</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tailor your photography and videography package to suit your event perfectly.
                        <br />
                        <span className="text-primary font-medium">All packages are fully customizable.</span>
                    </p>
                </div>

                <CameraCategoryToggle value={category} onChange={setCategory} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Controls Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">Configuration</CardTitle>
                                <CardDescription>Select your preferences below</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">

                                {/* Brand Preference */}
                                <div className="space-y-3">
                                    <Label>Brand Preference</Label>
                                    <Select value={brand} onValueChange={(v) => setBrand(v as Brand)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Brand" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Canon">Canon</SelectItem>
                                            <SelectItem value="Nikon">Nikon</SelectItem>
                                            <SelectItem value="Sony">Sony</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Duration */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <Label>Event Duration</Label>
                                        <Badge variant="secondary" className="text-base px-3">{days} Day{days > 1 ? 's' : ''}</Badge>
                                    </div>
                                    <Slider
                                        value={[days]}
                                        onValueChange={(v) => setDays(v[0])}
                                        min={1}
                                        max={6}
                                        step={1}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground px-1">
                                        <span>1 Day</span>
                                        <span>2 Days</span>
                                        <span>3 Days</span>
                                        <span>4 Days</span>
                                        <span>5 Days</span>
                                        <span>6 Days</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Cameras */}
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <Label className="flex items-center gap-2"><Video className="w-4 h-4" /> Video Cameras</Label>
                                                <span className="font-mono font-medium">{videoCamCount}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                {[0, 1, 2].map(num => (
                                                    <Button
                                                        key={num}
                                                        variant={videoCamCount === num ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => setVideoCamCount(num)}
                                                        className="flex-1"
                                                    >
                                                        {num === 0 ? "None" : num}
                                                    </Button>
                                                ))}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {videoCamCount === 0 ? 'No Charge' : (
                                                    category === 'DSLR'
                                                        ? (videoCamCount === 1 ? 'PKR 10,000/day' : 'PKR 18,000/day')
                                                        : (videoCamCount === 1 ? 'PKR 20,000/day' : 'PKR 40,000/day')
                                                )}
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <Label className="flex items-center gap-2"><Camera className="w-4 h-4" /> Photo Cameras</Label>
                                                <span className="font-mono font-medium">{photoCamCount}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                {[0, 1, 2].map(num => (
                                                    <Button
                                                        key={num}
                                                        variant={photoCamCount === num ? "default" : "outline"}
                                                        size="sm"
                                                        onClick={() => setPhotoCamCount(num)}
                                                        className="flex-1"
                                                    >
                                                        {num === 0 ? "None" : num}
                                                    </Button>
                                                ))}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {photoCamCount === 0 ? 'No Charge' : (
                                                    category === 'DSLR'
                                                        ? (photoCamCount === 1 ? 'PKR 5,000/day' : 'PKR 10,000/day')
                                                        : (photoCamCount === 1 ? 'PKR 12,000/day' : 'PKR 22,000/day')
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Albums & Drone */}
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <Label className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Albums</Label>
                                            <Select
                                                value={albumType}
                                                onValueChange={(v) => {
                                                    const newType = v as AlbumType;
                                                    setAlbumType(newType);
                                                    if (newType === 'None') {
                                                        setAlbumCount(0);
                                                    } else if (albumCount === 0) {
                                                        setAlbumCount(1);
                                                    }
                                                }}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="None">None</SelectItem>
                                                    <SelectItem value="Indian">Indian (PKR 10k)</SelectItem>
                                                    <SelectItem value="Glass Window">Glass Window (PKR 12k)</SelectItem>
                                                    <SelectItem value="Box">Box (PKR 15k)</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-sm text-muted-foreground">Quantity:</span>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline" size="icon" className="h-8 w-8"
                                                        onClick={() => setAlbumCount(Math.max(0, albumCount - 1))}
                                                        disabled={albumType === 'None'}
                                                    >
                                                        -
                                                    </Button>
                                                    <span className={`w-4 text-center ${albumType === 'None' ? 'text-muted-foreground' : ''}`}>{albumCount}</span>
                                                    <Button
                                                        variant="outline" size="icon" className="h-8 w-8"
                                                        onClick={() => setAlbumCount(albumCount + 1)}
                                                        disabled={albumType === 'None'}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between space-x-2 border p-3 rounded-lg">
                                            <div className="space-y-0.5">
                                                <Label className="flex items-center gap-2"><Plane className="w-4 h-4" /> Drone Coverage</Label>
                                                <span className="text-xs text-muted-foreground">
                                                    {category === 'DSLR' ? 'PKR 8,000/day' : 'PKR 10,000/day'}
                                                </span>
                                            </div>
                                            <Switch
                                                checked={droneEnabled}
                                                onCheckedChange={setDroneEnabled}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>

                    {/* Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card className="border-primary/20 shadow-xl bg-gradient-to-b from-background to-primary/5 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                                <CardHeader>
                                    <CardTitle>Estimated Total</CardTitle>
                                    <CardDescription>Based on your selection</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Category</span>
                                            <span className="font-medium">{category} ({brand})</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Duration</span>
                                            <span className="font-medium">{days} Day{days > 1 ? 's' : ''}</span>
                                        </div>
                                        <div className="border-t border-border/50 my-2 pt-2 space-y-1">
                                            <div className="flex justify-between">
                                                <span>Video ({videoCamCount})</span>
                                                <span>PKR {(videoCamCount > 0 ? PRICING[category].video[videoCamCount as 1 | 2] * days : 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Photo ({photoCamCount})</span>
                                                <span>PKR {(photoCamCount > 0 ? PRICING[category].photo[photoCamCount as 1 | 2] * days : 0).toLocaleString()}</span>
                                            </div>
                                            {droneEnabled && (
                                                <div className="flex justify-between">
                                                    <span>Drone</span>
                                                    <span>PKR {(PRICING[category].drone * days).toLocaleString()}</span>
                                                </div>
                                            )}
                                            {albumCount > 0 && (
                                                <div className="flex justify-between">
                                                    <span>Albums ({albumCount})</span>
                                                    <span>PKR {(PRICING[category].albums[albumType] * albumCount).toLocaleString()}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-border">
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-lg font-semibold">Total</span>
                                            <span className="text-3xl font-bold text-primary">PKR {totalPrice.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <SlideInButton
                                        className="w-full text-base py-4"
                                        onClick={handleContact}
                                        icon={<Phone className="w-4 h-4" />}
                                    >
                                        Contact Us
                                    </SlideInButton>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
