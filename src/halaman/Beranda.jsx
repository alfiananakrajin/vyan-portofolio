import { Navbar } from "../Komponen/Navbar"
import { SectionUtama } from "../Komponen/SectionUtama"
import { TemaToggle } from "../Komponen/TemaToggle"
import { BackgroundBintang } from '@/Komponen/BackgroundBintang'
import { TentangKami } from "../Komponen/TentangKami"
import { Skill } from "../Komponen/Skill"
import { Kontak } from "../Komponen/Kontak"
import { Portofolio } from "../Komponen/Portofolio"
import { Footer } from "../Komponen/Footer"

export const Beranda = ()  => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Tema */}
        <TemaToggle />
        {/* Background Efek */}
        <BackgroundBintang />
        {/* Navbar */}
        <Navbar />
        {/* Main Konten */}
        <main>
            <SectionUtama />
            <TentangKami />
            <Skill />
            <Portofolio />
            <Kontak />
        </main>
        {/* Footer */}
        <Footer />

    </div>
}