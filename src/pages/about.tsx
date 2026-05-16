import { motion, easeInOut } from "framer-motion";
import { Users, BookOpen, Heart, Target, Award } from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: easeInOut,
        },
    }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeInOut }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeInOut }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardHover = {
    hover: {
        y: -8,
        transition: { duration: 0.3, ease: easeInOut }
    }
};

export default function About() {
    const missions = [
        {
            icon: Users,
            title: "Mempererat Silaturahmi",
            description: "Membangun dan menjaga komunikasi aktif antar angkatan alumni SMAN 17 agar rasa kekeluargaan tetap hidup melintasi waktu dan jarak."
        },
        {
            icon: BookOpen,
            title: "Menghidupkan Semangat Almamater",
            description: "Menjadi mitra aktif SMAN 17 dalam mendukung perkembangan sekolah, siswa, dan program yang membawa nama baik almamater."
        },
        {
            icon: Target,
            title: "Mengembangkan Potensi Anggota",
            description: "Menyediakan ruang untuk berbagi ilmu, pengalaman, dan jejaring profesional agar setiap alumni dapat tumbuh dan saling menguatkan."
        },
        {
            icon: Heart,
            title: "Bergerak untuk Masyarakat",
            description: "Menginisiasi dan mendukung kegiatan sosial, pendidikan, dan kemanusiaan sebagai wujud pengabdian alumni kepada masyarakat."
        },
        {
            icon: Award,
            title: "Menjaga Nilai dan Marwah Alumni",
            description: "Menjunjung tinggi nama baik SMAN 17 melalui sikap, karya, dan integritas setiap anggota KBA17 di mana pun berada."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-primary/5 to-transparent py-20 lg:py-28">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5"></div>
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-gray-800 dark:text-white mb-6"
                        >
                            Tentang Kami
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-gray-600 dark:text-gray-300"
                        >
                            Keluarga Besar Alumni SMA Negeri 17 Jakarta Barat
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInLeft}
                            className="space-y-6"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-gray-800 dark:text-white mb-4">
                                    Profil KBA17
                                </h2>
                                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                            </div>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    KBA17 lahir dari semangat kebersamaan berkumpulnya para alumni yang percaya bahwa pertumbuhan terbaik itu terjadi bareng-bareng.
                                    Angka <span className="font-semibold text-primary">"17"</span> bukan sekadar identitas, tapi pengingat untuk terus berproses, mandiri, dan berani ambil peran.
                                </p>
                                <p>
                                    Hadir untuk menjadi ekosistem alumni yang solid, berdaya, dan memberi dampak nyata untuk anggota, almamater, dan Indonesia.
                                </p>
                                <p className="italic text-primary/80 font-medium">
                                    "Semoga KBA17 menjadi ruang aman para alumni untuk tumbuh, salah, belajar lagi, dan naik level bareng."
                                </p>
                                <p className="font-semibold text-gray-800 dark:text-white text-lg">
                                    Sekali Tujuh Belas, Selamanya Berkelas.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInRight}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Keluarga Besar Alumni SMAN 17 Jakarta Barat"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-10 lg:py-12 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-gray-800 dark:text-white mb-4">
                                Visi Kami
                            </h2>
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                                Menjadi wadah pemersatu Keluarga Besar Alumni SMAN 17 yang solid, berintegritas, dan berdampak,
                                guna menjaga silaturahmi, menguatkan kontribusi bagi almamater, dan memberi manfaat nyata bagi masyarakat.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-10 lg:py-12 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold font-['Poppins'] text-gray-800 dark:text-white mb-4">
                            Misi Kami
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></motion.div>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            5 Pilar Utama dalam membangun ekosistem alumni yang berdaya dan berdampak
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {missions.map((mission, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover="hover"
                                custom={index}
                            >
                                <motion.div
                                    variants={cardHover}
                                    className="h-full bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                        <mission.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-['Poppins'] text-gray-800 dark:text-white mb-3">
                                        {mission.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {mission.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-linear-to-r from-primary to-primary/80">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold font-['Poppins'] text-white mb-4">
                            Jadilah Bagian dari Keluarga Besar KBA17
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                            Bersama kita ciptakan ekosistem alumni yang solid, berdaya, dan memberi dampak nyata untuk almamater dan Indonesia.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                                Gabung Sekarang
                            </button>
                            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                                Pelajari Lebih Lanjut
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}