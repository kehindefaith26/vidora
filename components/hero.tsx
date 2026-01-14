"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Play, ShoppingBag, Heart, Share2, ArrowRight, ArrowUpRight, Globe } from "lucide-react"
// Line 7: Use "type Variants" with a Capital V
import { motion, type Variants } from "framer-motion"

export function Hero() {
    // Line 10: Use ": Variants" with a Capital V
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    // Use ": Variants" with a Capital V here too
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
    }

    return (
        <section className="relative overflow-hidden pt-16 md:pt-24 pb-32">
            <motion.div
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/20 rounded-full blur-3xl -z-10"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6">
                        Power Your Store With <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                            Interactive Video Commerce
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                        Create, host, and monetize high-performance product videos, live shopping streams, and interactive experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-20">
                        <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-purple-500/25 transition-all">
                            Start Free Trial
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full group">
                            Request a Demo
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                    className="relative w-full max-w-[1000px] h-[600px] md:h-[700px] flex justify-center"
                >
                    <div className="relative z-20 w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-black rounded-[40px] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-800">
                            <img
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                                alt="Fashion Model"
                                className="w-full h-full object-cover opacity-90"
                            />

                            <div className="absolute top-12 left-0 w-full px-4 flex justify-between items-start">
                                <div className="flex gap-1 w-full">
                                    <div className="h-1 w-full bg-white/20 rounded-full" />
                                    <div className="h-1 w-full bg-white/60 rounded-full" />
                                </div>
                            </div>

                            <div className="absolute right-4 top-1/3 flex flex-col gap-6 items-center">
                                {[ShoppingBag, Heart, Share2].map((Icon, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1">
                                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 cursor-pointer hover:scale-110 transition-transform">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-[10px] text-white font-medium">
                                            {i === 0 ? "Shop" : i === 1 ? "12.4k" : "2.1k"}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-8 left-4 right-4">
                                <div className="mb-4">
                                    <Badge className="bg-red-500 hover:bg-red-600 text-white border-0 backdrop-blur-sm mb-2 animate-pulse">LIVE</Badge>
                                    <h3 className="text-white font-bold text-lg">Spring Collection Drop</h3>
                                </div>

                                <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gray-700 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="text-xs text-gray-300">New Release</div>
                                        <div className="text-sm font-bold text-white leading-tight">Luxe Mesh Runner</div>
                                    </div>
                                    <div className="text-white font-bold text-sm">$89</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-30" />
                    </div>

                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute left-0 md:left-[5%] top-[10%] hidden md:block"
                    >
                        <Card className="w-[180px] p-4 bg-yellow-400 border-0 shadow-xl">
                            <div className="flex flex-col items-start gap-1">
                                <div className="w-8 h-8 flex items-center justify-center bg-yellow-300 rounded-lg mb-2">
                                    <ArrowUpRight className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="text-3xl font-bold text-black">42.7</div>
                                <div className="text-xs font-semibold text-black/80">Avg Session Min</div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                        className="absolute right-4 md:right-[10%] top-[15%] hidden md:block"
                    >
                        <Card className="w-[180px] p-4 bg-orange-500 border-0 shadow-xl">
                            <div className="flex flex-col items-start gap-1">
                                <div className="w-8 h-8 flex items-center justify-center bg-orange-400 rounded-lg mb-2">
                                    <Globe className="w-5 h-5 text-cyan-100" />
                                </div>
                                <div className="text-3xl font-bold text-white">3.1B+</div>
                                <div className="text-xs font-semibold text-white/90">Views Delivered</div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute left-4 md:left-[0%] bottom-[20%] hidden md:block"
                    >
                        <Card className="w-[240px] p-4 bg-white border shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Play size={14} fill="currentColor" />
                                </div>
                                <p className="text-sm font-medium leading-tight">Turn videos into instant shopping experiences</p>
                            </div>
                            <Button variant="outline" size="sm" className="w-full text-xs h-8">
                                Copy Share Link
                            </Button>
                        </Card>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute right-0 md:right-[5%] bottom-[15%] hidden md:block"
                    >
                        <Card className="w-[200px] p-3 bg-white border shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <div className="aspect-video w-full bg-red-500 rounded-lg mb-3 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                                <Badge className="absolute top-1 right-1 h-5 px-1.5 text-[10px] bg-black/50 backdrop-blur">Low Stock</Badge>
                            </div>
                            <h4 className="font-bold text-sm truncate">Performance Runner Pro</h4>
                            <div className="flex items-center justify-between mt-1">
                                <span className="font-bold text-sm">$149.00</span>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}