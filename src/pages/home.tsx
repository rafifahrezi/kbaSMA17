import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Users, Handshake, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";
import { Button } from "./../components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./../components/ui/card";
import { motion, easeInOut } from "framer-motion";

export default function Home() {
    useEffect(() => {
        document.title =
            "KBA17 - Keluarga Besar Alumni SMAN 17 Jakarta Barat";
    }, []);

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

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: easeInOut,
            },
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const values = [
        {
            icon: Users,
            title: "Kebersamaan",
            description:
                "Menguatkan silaturahmi dan rasa kekeluargaan antar alumni lintas generasi.",
        },
        {
            icon: Handshake,
            title: "Kolaborasi",
            description:
                "Bersinergi untuk menciptakan peluang, inovasi, dan kontribusi nyata.",
        },
        {
            icon: ShieldCheck,
            title: "Integritas",
            description:
                "Menjunjung tinggi kejujuran, tanggung jawab, dan komitmen bersama.",
        },
        {
            icon: TrendingUp,
            title: "Pengembangan",
            description:
                "Terus bertumbuh dan meningkatkan kapasitas diri serta komunitas.",
        },
        {
            icon: HeartHandshake,
            title: "Dampak",
            description:
                "Memberikan kontribusi positif bagi almamater, masyarakat, dan bangsa.",
        },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-12 lg:py-10">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="./../images/mangga-besar.png"
                        alt="SMA Negeri 17 Jakarta Barat"
                        className="h-full w-full object-cover opacity-10"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 from-slate-950 via-slate-900/90 to-slate-950/70" />
                    {/* Gold Glow Accent */}
                    <div className="absolute left-1/3 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-size-[32px_32px]" />
                </div>
                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    {/* Split Layout */}
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        {/* LEFT CONTENT */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col justify-center text-left">
                            {/* Badge */}
                            <motion.div
                                variants={fadeUp}
                                className="mb-6 inline-flex w-fit items-center rounded-full border border-primary/90 bg-primary/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                                Keluarga Besar Alumni SMAN 17 Jakarta
                            </motion.div>
                            {/* Heading */}
                            <motion.h1
                                variants={fadeUp}
                                className="max-w-2xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                                KBA{" "}
                                <span className="text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.45)]">
                                    17
                                </span>
                                <br />
                                <span className="text-white">
                                    Bersatu,
                                </span>
                                <br />
                                <span className="text-yellow-400">
                                    Berkarya
                                </span>
                                <br />
                                <span className="text-white">
                                    Bersinergi
                                </span>
                            </motion.h1>
                            {/* Description */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-8 max-w-xl space-y-5">
                                <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                                    Selamat datang di Portal Resmi Keluarga Besar Alumni
                                    SMA Negeri 17 Jakarta.
                                </p>
                                <p className="text-base leading-relaxed text-slate-400 md:text-lg">
                                    Website ini kami hadirkan sebagai Jembatan silaturahmi lintas angkatan, kolaborasi, dan pengabdian
                                    untuk
                                    seluruh alumni. Temukan teman lama, bagikan peluang, dan terus bawa nama baik almamater ke mana pun
                                    kita
                                    melangkah.
                                </p>
                            </motion.div>
                            {/* CTA */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    to="/anggota"
                                    className="group relative overflow-hidden rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(250,204,21,0.45)]"
                                >
                                    <span className="relative z-10">
                                        Daftar Anggota
                                    </span>
                                    <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </Link>

                                <Link
                                    to="/pengurus"
                                    className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10 hover:text-yellow-300"
                                >
                                    Daftar Pengurus KBA17
                                </Link>
                            </motion.div>
                        </motion.div>
                        {/* RIGHT VISUAL / LOGO */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative flex items-center justify-center" >
                            {/* Outer Glow */}
                            <div className="absolute h-105 w-105 rounded-full bg-yellow-400/20 blur-3xl" />
                            {/* Rim Light */}
                            <div className="absolute h-90 w-90 rounded-full border border-yellow-400/20" />
                            {/* Animated Orbit */}
                            <div className="absolute h-112.5 w-112.5 rounded-full border border-yellow-400/10 animate-spin [animation-duration:18s]" />
                            {/* Logo Container */}
                            <div className="relative">
                                {/* Shadow Glow */}
                                <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-2xl" />
                                {/* Logo */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="relative"
                                >
                                    <img
                                        src="./images/logo.png"
                                        alt="KBA17 Logo"
                                        className="relative z-10 h-70 w-70 object-contain drop-shadow-[0_15px_45px_rgba(250,204,21,0.45)] sm:h-85 sm:w-85 lg:h-110 lg:w-110"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About us Short */}
            <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 right-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl" />

                    {/* Dot Pattern */}
                    <div className="absolute right-10 bottom-10 grid grid-cols-4 gap-2 opacity-30">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-1.5 w-1.5 rounded-full bg-yellow-500"
                            />
                        ))}
                    </div>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid items-center gap-16 lg:grid-cols-2"
                    >
                        {/* LEFT CONTENT */}
                        <div className="max-w-xl">
                            {/* Eyebrow */}
                            <motion.div variants={fadeUp}>
                                <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                                    Tentang KBA 17
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                variants={fadeUp}
                                className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl"
                            >
                                Lebih dari Sekadar Alumni,
                                <span className="block text-primary">
                                    Kami Keluarga
                                </span>
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                variants={fadeUp}
                                className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                            >
                                KBA17 berdiri di atas semangat kebersamaan, siap menghubungkan angkatan pertama hingga terbaru.
                                Kami bukan sekadar daftar nama di buku tahunan. Kami adalah <span className=" font-semibold">Keluarga Besar Alumni SMAN 17</span> —
                                ikatan ribuan lulusan lintas generasi yang disatukan oleh cerita, tawa, dan perjuangan di ruang
                                belajar yang sama.
                            </motion.p>

                            {/* CTA */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-10"
                            >
                                <Link
                                    to="/tentang-kami"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary dark:bg-primary"
                                >
                                    Pelajari Lebih Lanjut

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <motion.div
                            variants={fadeUp}
                            className="relative"
                        >
                            {/* Background Accent */}
                            <div className="absolute -top-6 -right-6 h-full w-full rounded-3xl bg-slate-900 dark:bg-primary/30" />

                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="./images/tentang.jpeg"
                                    alt="KBA17 Alumni"
                                    className="h-full w-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                            </div>

                            {/* Floating Glow */}
                            <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-yellow-500/20 blur-3xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Company Values Grid */}
            <section className="relative overflow-hidden bg-white py-10 lg:py-14">
                {/* Background Accent */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1px)]" />
                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <div className="mb-14 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Nilai Organisasi
                        </span>
                        <h2 className="mt-4 text-3xl font-bold uppercase tracking-wide text-slate-900 md:text-4xl">
                            Nilai & Komitmen
                        </h2>
                        {/* Gold Accent Line */}
                        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-yellow-500" />
                    </div>

                    {/* 5 Column Grid */}
                    <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-5">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-50"
                                >
                                    {/* Icon */}
                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-yellow-400/40 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.08)]">
                                        <Icon className="h-9 w-9 stroke-[1.8] text-slate-800 transition-colors duration-300 group-hover:text-yellow-600" />
                                    </div>

                                    {/* Heading */}
                                    <h3 className="mb-4 text-xl font-bold text-slate-900">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="max-w-55 text-sm leading-relaxed text-slate-500">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
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
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {upcomingEvents.map((kegiatan) => (
                                <motion.div variants={fadeUp}>
                                    <Card
                                        key={kegiatan.id}
                                        className="overflow-hidden border-border/50 transition-colors hover:border-primary/50"
                                    >
                                        {kegiatan.fotoUrl ? (
                                            <div className="aspect-video w-full overflow-hidden">
                                                <img
                                                    src={kegiatan.fotoUrl}
                                                    alt={kegiatan.judul}
                                                    className="h-full w-full aspect-4/3 px-8 m-2 object-cover transition-all duration-500 hover:scale-105"
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

                                        {/* <CardFooter className="pt-0">
                                        <Button asChild variant="outline" className="w-full">
                                            <Link to="/kegiatan">Detail & RSVP</Link>
                                        </Button>
                                    </CardFooter> */}
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
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

            {/* CTA Banner */}
            <section className="relative overflow-hidden bg-white py-4">
                <div className="container mx-auto px-4 md:px-13">
                    {/* CTA Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 px-8 py-10 shadow-2xl lg:px-14 lg:py-12">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.08]">
                            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border border-yellow-400/30" />
                            <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full border border-yellow-400/20" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
                            {/* LEFT CONTENT */}
                            <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
                                {/* Icon */}
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-sm">
                                    <Users className="h-10 w-10 stroke-[1.8] text-yellow-400" />
                                </div>
                                {/* Text */}
                                <div className="max-w-2xl">
                                    <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                                        Bersama KBA 17,
                                        <span className="block text-yellow-400">
                                            Kita Lebih Kuat, Kita Lebih Bermakna.
                                        </span>
                                    </h2>
                                    <p className="mt-3 text-base leading-relaxed text-slate-300 md:text-lg">
                                        Mari bergabung dan menjadi bagian dari
                                        silaturahmi, kolaborasi, dan kontribusi
                                        positif alumni SMA Negeri 17 Jakarta.
                                    </p>
                                </div>
                            </div>
                            {/* RIGHT BUTTON */}
                            <div className="shrink-0">
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="group inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_0_35px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_45px_rgba(250,204,21,0.45)]"
                                >
                                    Gabung Sekarang
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}