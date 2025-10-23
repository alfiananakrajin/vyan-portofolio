import { Briefcase, Code, User } from "lucide-react";


export const TentangKami = () => {
    return (
        <section id='tentang' className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Tentang <span className="text-primary"> Saya </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-extrabold">
                            Keahlian pada UI/UX Design dan Web Development
                        </h3>
                        <p className="text-muted-foreground">
                            Saya belajar di Web Development dan UI/UX Design selama 1 tahun di masa perkuliahan
                            saya di semester 5 dengan jurusan D3 Teknik Informatika dari Universitas Amikom Yogyakarta.
                        </p>
                        <p className="text-muted-foreground">
                            Saya memiliki keahlian dalam membuat desain website secara elegan dan memiliki solusi
                            dalam menyelesaikan masalah, serta saya mempelajari tentang teknologi baru saat ini
                            dengan teknik yang saya miliki selama masa perkuliahaan lalu.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="kontak" className="cosmic-button">
                                Monggo Lihat Projek Saya
                            </a>

                            <a href="kontak" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV Saya
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Front End Development</h4>
                                    <p className="text-muted-foreground">
                                        Membangun tampilan website lebih fungsional dan responsif dengan
                                        menggunakan tech stack terbaru serta modern yang membuat website semakin indah
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Membangun desain website yang lebih interaktif
                                        dan meningkatkan interaksi pengguna
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Manajemen Projek</h4>
                                    <p className="text-muted-foreground">
                                        Dapat memanajemen projek secara tanggung jawab dan profesional
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};