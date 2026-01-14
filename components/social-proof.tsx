export function SocialProof() {
    const brands = [
        "VELORA",
        "NORTHWAVE",
        "BLUMER",
        "SKINNIFY",
        "PUREDROP",
        "LUXORA",
        "THREADLINE",
        "URBAN PEAK",
    ]

    return (
        <section className="py-12 border-t border-border/5 bg-background">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
                    Trusted by modern commerce brands worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50">
                    {brands.map((brand) => (
                        <h3 key={brand} className="text-xl md:text-2xl font-bold tracking-tight text-gray-400 select-none">
                            {brand}
                        </h3>
                    ))}
                </div>
            </div>
        </section>
    )
}
