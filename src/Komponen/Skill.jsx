import { useState } from "react"
import { cn } from "../lib/utils";


const skill = [
    { nama: 'HTML/CSS', tingkat: 92, kategori: 'frontend' },
    { nama: 'Angular', tingkat: 78, kategori: 'frontend' },
    { nama: 'Typescript', tingkat: 76, kategori: 'frontend' },
    { nama: 'SCSS', tingkat: 75, kategori: 'frontend' },
    { nama: 'Tailwind.CSS', tingkat: 74, kategori: 'frontend' },
    { nama: 'React', tingkat: 72, kategori: 'frontend' },
    { nama: 'Javascript', tingkat: 70, kategori: 'frontend' },

    { nama: 'Node.JS', tingkat: 76, kategori: 'backend' },
    { nama: 'PHP', tingkat: 60, kategori: 'backend' },
    { nama: 'MySQL', tingkat: 48, kategori: 'backend' },

    { nama: 'Figma', tingkat: 93, kategori: 'alat' },
    { nama: 'VS Code', tingkat: 85, kategori: 'alat' },
    { nama: 'Github', tingkat: 72, kategori: 'alat' },
]

const kategori = ['semua', 'frontend', 'backend', 'alat']

export const Skill = () => {
    const [activeKategori, setactiveKategori] = useState('semua');

    const filteredSkill = skill.filter(
        (skill) => activeKategori === 'semua' || skill.kategori === activeKategori
    );

    return <section
        id="skill"
        className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Skill <span className="text-primary">Saya</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {kategori.map((kategori, key) => (
                    <button 
                    key={key}
                    onClick={() => setactiveKategori(kategori)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", 
                    activeKategori === kategori ? 'bg-primary text-primary-foreground' : 
                    'bg-secondary/70 text-foreground hover:bd-secondary'
                    )}>
                        {kategori}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkill.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.nama}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.tingkat + '%' }} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.tingkat}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}