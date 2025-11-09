import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"


export const Kontak = () => {

    const [isSubmitting, setIsSubmitting] =
    useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        setIsSubmitting(false);
            
        }, 1500)
    }
    return <section id="kontak" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4x font-bold mb_4 text-center">
                Bisa Hubungin Saya <span className="text-primary">Tekan</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Disini saya memiliki projek portofolio yang saya buat dan dapat
                berdiskusi melalui kontak yang sudah saya sediakan
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-extrabold mb-6">Informasi Kontak Saya</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="https://mail.google.com/mail/u/0/?fs=1&to=alfiananakrajin@gmail.com&tf=cm"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    alfiananakrajin@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Telepon</h4>
                                <a href="https://api.whatsapp.com/send/?phone=6282325054448&text&type=phone_number&app_absent=0"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    +62 823-2505-4448
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Lokasi Saya</h4>
                                <a href="https://maps.app.goo.gl/t2rqo63PSmtBmniK7"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    Sleman, Yogyakarta, Indonesia
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium"> Gabung dengan saya </h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/alvian-putra-dixsy-7a3259279/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/yan_ptr04?igsh=MXA1cHE2aWdzeTRzNw==" target="_blank">
                                <Instagram />
                            </a>
                            <a href="https://www.facebook.com/alfian.id04" target="_blank">
                                <Facebook />
                            </a>
                            <a href="https://youtube.com/@fian_04?si=Laf7gsccXaVSUrMv" target="_blank">
                                <Youtube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="nama"
                                className="block text-sm font-medium mb-2">Nama Anda</label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Alvian Putra Dixsy" />
                        </div>
                        <div>
                            <label htmlFor="email"
                                className="block text-sm font-medium mb-2">Email Anda</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="anonim@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="pesan"
                                className="block text-sm font-medium mb-2">Pesan Anda</label>
                            <input
                                type="text"
                                id="pesan"
                                name="pesan"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Tulis pesan anda disini" />
                        </div>
                        <button type="submit" 
                        disabled={isSubmitting}
                        className={cn('cosmic-button w-full flex items-center justify-center gap-2',)}>
                            {isSubmitting ? 'Kirimkan':'Kirim Pesan Anda'}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}