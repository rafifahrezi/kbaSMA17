import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, History, ArrowRight } from "lucide-react";
import { Button } from "./../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./../components/ui/card";


export default function Home() {
    useEffect(() => {
        document.title =
            "KBA17 - Keluarga Besar Alumni SMAN 17 Jakarta Barat";
    }, []);

    const [stats] = useState({
        totalAnggota: 1250,
        angkatanTerwakilkan: 35,
        totalKegiatan: 120,
        tahunBerdiri: 2020,
    });

    const [upcomingEvents] = useState([
        {
            id: 1,
            judul: " Reuni Akbar SMA NEGERI 17 JAKARTA ",
            tanggal: "2025-12-10",
            deskripsi:
                "Ajang silaturahmi seluruh alumni lintas angkatan SMA Negeri 17 Jakarta Barat.",
            fotoUrl: "./../images/reuni1.jpeg",
            aspectRatio: "portrait",
        },
        {
            id: 2,
            judul: "SILAHTURAHMI AKBAR KBA17",
            tanggal: "2026-05-09",
            deskripsi:
                "Kegiatan rutin tahunan setelah Iedul Fithri bagi seluruh alumni SMA NEGERI 17 JAKARTA.",
            fotoUrl: "./../images/Akbar.jpeg",
            aspectRatio: "landscape",
        },
        {
            id: 3,
            judul: "Have Fun Car Free Day",
            tanggal: "2025-08-03",
            deskripsi:
                "Olahraga di Minggu pagi sambil silaturahmi.",
            fotoUrl: "./../images/cdf.jpeg",
            aspectRatio: "portrait",
        },
    ]);

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-primary/5 py-24 lg:py-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-school.png"
                        alt="SMA Negeri 17 Jakarta Barat"
                        className="h-full w-full object-cover opacity-20"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-background to-background/20" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            KBA17
                            <br />
                            <span className="text-primary">Keluarga Besar Alumni</span>
                            <br />
                            <span className="text-primary">SMA Negeri 17 Jakarta</span>
                        </h1>
                        <div className="space-y-0">
                            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                                Selamat datang,
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Di Portal Resmi Keluarga Besar Alumni SMA Negeri 17 JAKARTA.
                                Website ini kami hadirkan sebagai Jembatan silaturahmi lintas angkatan, kolaborasi, dan pengabdian
                                untuk
                                seluruh alumni. Temukan teman lama, bagikan peluang, dan terus bawa nama baik almamater ke mana pun
                                kita
                                melangkah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About us Short */}
            <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28 lg:py-32">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-[0.03] background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 1px); background-size: 32px 32px"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-slate-900"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

                            <div className="shrink-0 w-full lg:w-auto animate-in fade-in slide-in-from-left duration-700">
                                <div className="relative group">


                                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
                                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
                                        <div className="absolute inset-2 rounded-full bg-linear-to-br from-primary via-primary/80 to-primary/60 shadow-2xl shadow-primary/30 overflow-hidden ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-500 group-hover:scale-105">
                                            <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                                <svg className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                    <circle cx="12" cy="8" r="4" />
                                                    <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 animate-ping-slow transition-opacity duration-700"></div>
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"></div>
                                </div>
                            </div>

                            <div className="flex-1 text-center lg:text-left space-y-6">
                                <div className="space-y-3 animate-in fade-in-up duration-700 delay-100">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                        Dari Satu Atap,
                                        <br className="hidden sm:block" />
                                        <span className="text-primary">
                                            Untuk Selamanya
                                        </span>
                                    </h2>
                                </div>
                                <div className="space-y-4 animate-in fade-in-up duration-700 delay-200">
                                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                        KBA17 berdiri di atas semangat kebersamaan, siap menghubungkan angkatan pertama hingga terbaru.
                                        Kami bukan sekadar daftar nama di buku tahunan. Kami adalah <span className="text-primary font-semibold">Keluarga Besar Alumni SMAN 17</span> —
                                        ikatan ribuan lulusan lintas generasi yang disatukan oleh cerita, tawa, dan perjuangan di ruang
                                        belajar yang sama.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-in fade-in-up duration-700 delay-400">
                                    <a href="{{ route('members') }}"
                                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                                        <span className="relative z-10">Daftar Anggota</span>
                                        <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </a>

                                    <a href="#"
                                        className="group inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                                        <span>Daftar Pengurus KBA17</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Upcoming Events */}
            <section className="bg-accent/30 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground">
                                Kegiatan & Event
                            </h2>

                            <p className="mt-2 text-muted-foreground">
                                Berbagai kegiatan seru dan bermanfaat yang telah oleh Keluarga Besar Alumni SMA
                                Negeri 17 Jakarta Barat
                            </p>
                        </div>

                        <Button asChild variant="ghost" className="hidden md:flex">
                            <Link to="/kegiatan">
                                Lihat Semua
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {upcomingEvents.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {upcomingEvents.map((kegiatan) => (
                                <Card
                                    key={kegiatan.id}
                                    className="overflow-hidden border-border/50 transition-colors hover:border-primary/50"
                                >
                                    {kegiatan.fotoUrl ? (
                                        <div className="aspect-video w-full overflow-hidden">
                                            <img
                                                src={kegiatan.fotoUrl}
                                                alt={kegiatan.judul}
                                                className="h-full w-full aspect-4/3 px-8 m-2 object-cover transition-transform hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex aspect-video w-full items-center justify-center bg-muted">
                                            <Calendar className="h-12 w-12 text-muted-foreground/50" />
                                        </div>
                                    )}

                                    <CardHeader>
                                        <div className="mb-2 flex items-center justify-between">

                                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <Calendar className="h-3 w-3" />
                                                {formatDate(kegiatan.tanggal)}
                                            </span>
                                        </div>

                                        <CardTitle className="line-clamp-2">
                                            {kegiatan.judul}
                                        </CardTitle>

                                    </CardHeader>

                                    <CardContent>
                                        <p className="line-clamp-3 text-sm text-muted-foreground">
                                            {kegiatan.deskripsi}
                                        </p>
                                    </CardContent>

                                    <CardFooter className="pt-0">
                                        <Button asChild variant="outline" className="w-full">
                                            <Link to="/kegiatan">Detail & RSVP</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-lg border border-dashed bg-card py-12 text-center">
                            <Calendar className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

                            <h3 className="text-lg font-medium text-foreground">
                                Belum ada kegiatan mendatang
                            </h3>

                            <p className="text-muted-foreground">
                                Nantikan update kegiatan KBA17 selanjutnya.
                            </p>
                        </div>
                    )}

                    <Button asChild variant="ghost" className="mt-6 w-full md:hidden">
                        <Link to="/kegiatan">
                            Lihat Semua
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}