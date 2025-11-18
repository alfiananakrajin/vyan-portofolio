import { ArrowDown } from "lucide-react"

export const SectionUtama = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Halo, Saya </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Alvian </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Putra Dixsy</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Saya disini sebagai UI/UX Design dan Front End Development dengan menggunakan
                    framework yang modern dan canggih untuk membangun website yang memiliki interaksi
                    pengguna dengan keindahan dan lebih responsif.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#portofolio" className="cosmic-button">
                        Silahkan Dilihat
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Silahkan Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}