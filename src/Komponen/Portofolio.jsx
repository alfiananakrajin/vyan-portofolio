import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projek = [
    {
        id: 1,
        judul: 'Perpustakaan Mekar Website',
        deskripsi: 'Website perpustakaan mekar dengan desain warna pink yang berdasarkan filosofi bunga mekar sebagai logo perpustakaan',
        gambar: '/Projek/Projek1.png',
        tags: ['Angular', 'SASS', 'Firebase'],
        demoUrl: 'https://perpustakaan-mekar-1.web.app/beranda',
        githubUrl: 'https://github.com/LintangCBM/perpustakaan-mekar'
    },
    {
        id: 2,
        judul: 'Vyan E-Commerce',
        deskripsi: 'Website marketplace dengan menjual produk berdasarkan api dari dummyjson yang telah diimplementasikan dengan tect stack modern',
        gambar: '/Projek/Projek2.png',
        tags: ['ReactJS', 'JS', 'Tailwind.CSS', 'Netlify'],
        demoUrl: 'https://vyane-commerce.netlify.app/',
        githubUrl: 'https://github.com/alfiananakrajin/vyan-e-commerce'
    },
    {
        id: 3,
        judul: 'Portofolio Lama Saya',
        deskripsi: 'Website portofolio dengan design sederhana yang responsif dan memiliki pengalaman belajar teknologi selama masa kuliah',
        gambar: '/Projek/Projek3.png',
        tags: ['HTML', 'CSS', 'JS'],
        demoUrl: 'https://alvian-portfolio.vercel.app/',
        githubUrl: 'https://github.com/alfiananakrajin/New-Portofolio'
    },
    {
        id: 4,
        judul: 'Kopi  Enak',
        deskripsi: 'Website yang bertemakan pemasaran kopi dengan filosofi kopi modern yang disukai oleh anak muda saat ini',
        gambar: '/Projek/Projek4.png',
        tags: ['HTML', 'CSS', 'JS'],
        demoUrl: 'https://kopi-enak.vercel.app/',
        githubUrl: 'https://github.com/alfiananakrajin/Kopi-Enak'
    },
]

const proyek = [
    {
        id: 1,
        judul: 'Vyan Marketplace',
        deskripsi: 'Ui design yg bertemakan marketplace dengan menjual produk sembako',
        gambar: '/Projek/Projek5.png',
        tags: ['UI Design', 'UX'],
        demoUrl: 'https://www.figma.com/design/HADBLBb4WvTQhB5CR2CSzL/Vyan-Marketplace?node-id=0-1&t=ImZYEJYBqgg3g6zy-1',
    },
    {
        id: 2,
        judul: 'Amanah Fried Chicken',
        deskripsi: 'Design ui/ux yg dikembangkan oleh kami di waktu magang kampus sebagai kewajiban tugas dari ui/ux design',
        gambar: '/Projek/Projek6.png',
        tags: ['UI Design', 'UX'],
        demoUrl: 'https://www.figma.com/design/dcks9YEPCjmY7X1Kpz8c9c/fried-chicken-site?m=auto&t=ImZYEJYBqgg3g6zy-6',
    },
]

export const Portofolio = () => {
    return <section id="portofolio" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Fitur <span className="text-primary">Projek</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Disini telah tersedia hasil pembuatan projek saya untuk menjadikan portofolio dengan
                keahlian yang saya miliki selama waktu kuliah dengan menggunakan teknik pendekatan
                pengalaman pengguna, dan tampilan yang interaktif.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projek.map((projek) => (
                    <div key={projek.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={projek.gambar}
                                alt={projek.judul}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projek.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-shadow-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {projek.judul}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {projek.deskripsi}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={projek.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={projek.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {proyek.map((proyek) => (
                    <div key={proyek.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={proyek.gambar}
                                alt={proyek.judul}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {proyek.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-shadow-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {proyek.judul}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {proyek.deskripsi}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={proyek.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="text-center mt-12">
                <a
                    href="https://github.com/alfiananakrajin"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Lihat Di Github Saya <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>;
};