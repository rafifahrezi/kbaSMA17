import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Search, X } from "lucide-react";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easeInOut,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const listAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

interface Pengurus {
    id: number;
    nama: string;
    jabatan: string;
    angkatan: string;
    kategori: string;
}

// Constants
const ORGANIZATION_PERIOD = "2024 — 2027";
const EMPTY_ANGKATAN = "-";
const DEBOUNCE_DELAY = 300;

// Data
const PENGURUS_DATA: Pengurus[] = [
    {
        id: 1,
        nama: "Drs. Arifin. M. A. P",
        jabatan: "Ketua Umum",
        angkatan: "'91",
        kategori: "Ketua Umum",
    },
    {
        id: 2,
        nama: "Edy Bachrudin",
        jabatan: "Wakil Ketua 1",
        angkatan: "'89",
        kategori: "Wakil Ketua",
    },
    {
        id: 3,
        nama: "Sandra Utama",
        jabatan: "Wakil Ketua 2",
        angkatan: "'91",
        kategori: "Wakil Ketua",
    },
    {
        id: 4,
        nama: "M Daniel Chaeruddin S.Kom",
        jabatan: "Wakil Ketua 3",
        angkatan: "'95",
        kategori: "Wakil Ketua",
    },
    {
        id: 5,
        nama: "Nova Ferdyan S.Kom",
        jabatan: "Sekretaris 1",
        angkatan: "'94",
        kategori: "Sekretaris",
    },
    {
        id: 6,
        nama: "Yani Afrina",
        jabatan: "Sekretaris 2",
        angkatan: "'05",
        kategori: "Sekretaris",
    },
    {
        id: 7,
        nama: "Nenden Angelasari",
        jabatan: "Bendahara 1",
        angkatan: "'86",
        kategori: "Bendahara",
    },
    {
        id: 8,
        nama: "Yuena Shandi",
        jabatan: "Bendahara 2",
        angkatan: "'87",
        kategori: "Bendahara",
    },
    {
        id: 9,
        nama: "Kepala Sekolah SMAN 17",
        jabatan: "Dewan Pembina Sekolah",
        angkatan: EMPTY_ANGKATAN,
        kategori: "Dewan Pembina",
    },
    {
        id: 10,
        nama: "Gunawan Cahyadi",
        jabatan: "Dewan Pembina Alumni",
        angkatan: "'80",
        kategori: "Dewan Pembina",
    },
    {
        id: 11,
        nama: "Billy Pakpahan",
        jabatan: "Dewan Pembina Alumni",
        angkatan: "'83",
        kategori: "Dewan Pembina",
    },
    {
        id: 12,
        nama: "Ir. Dendhy W M.TrT, IPM",
        jabatan: "Dewan Pembina Alumni",
        angkatan: "'88",
        kategori: "Dewan Pembina",
    },
    {
        id: 13,
        nama: "Meri Sonya SH, MH",
        jabatan: "Dewan Penasehat Alumni",
        angkatan: "'80",
        kategori: "Dewan Penasehat",
    },
    {
        id: 14,
        nama: "Mansyur",
        jabatan: "Dewan Penasehat Alumni",
        angkatan: "'84",
        kategori: "Dewan Penasehat",
    },
    {
        id: 15,
        nama: "Muhammad Zulkifli S.Sos, M.AP",
        jabatan: "Dewan Penasehat Alumni",
        angkatan: "'85",
        kategori: "Dewan Penasehat",
    },
];

// Helper Functions
const normalizeText = (text: string): string => {
    return text.toLowerCase().trim().replace(/\s+/g, " ");
};

const calculateRelevanceScore = (pengurus: Pengurus, searchTerm: string): number => {
    const normalizedSearch = normalizeText(searchTerm);
    const searchTerms = normalizedSearch.split(" ");

    let score = 0;

    // Check nama (highest priority)
    const normalizedNama = normalizeText(pengurus.nama);
    if (normalizedNama === normalizedSearch) {
        score += 100;
    } else if (normalizedNama.includes(normalizedSearch)) {
        score += 80;
    } else {
        for (const term of searchTerms) {
            if (term.length > 0 && normalizedNama.includes(term)) {
                score += 40;
            }
        }
    }

    // Check angkatan (medium priority)
    const normalizedAngkatan = normalizeText(pengurus.angkatan);
    if (normalizedAngkatan === normalizedSearch) {
        score += 60;
    } else if (normalizedAngkatan.includes(normalizedSearch)) {
        score += 40;
    }

    // Check jabatan (medium priority)
    const normalizedJabatan = normalizeText(pengurus.jabatan);
    if (normalizedJabatan === normalizedSearch) {
        score += 60;
    } else if (normalizedJabatan.includes(normalizedSearch)) {
        score += 35;
    }

    // Check kategori (lower priority)
    const normalizedKategori = normalizeText(pengurus.kategori);
    if (normalizedKategori === normalizedSearch) {
        score += 30;
    } else if (normalizedKategori.includes(normalizedSearch)) {
        score += 15;
    }

    return score;
};

const isSearchMatch = (pengurus: Pengurus, searchTerm: string): boolean => {
    if (!searchTerm) return true;
    const normalizedSearch = normalizeText(searchTerm);

    return (
        normalizeText(pengurus.nama).includes(normalizedSearch) ||
        normalizeText(pengurus.jabatan).includes(normalizedSearch) ||
        normalizeText(pengurus.angkatan).includes(normalizedSearch) ||
        normalizeText(pengurus.kategori).includes(normalizedSearch)
    );
};

// Components
interface EmptyStateProps {
    searchTerm: string;
    onClear: () => void;
    resultCount: number;
}

const EmptyState = ({ searchTerm, onClear }: EmptyStateProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="py-20 text-center"
    >
        <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
        >
            <Search className="mx-auto mb-5 h-12 w-12 text-slate-300" />
        </motion.div>

        <h3 className="text-xl font-semibold text-slate-700">
            Pengurus tidak ditemukan
        </h3>

        <p className="mt-2 text-slate-500">
            Tidak ada data yang sesuai dengan pencarian "
            <span className="font-medium text-slate-700">{searchTerm}</span>".
        </p>

        <p className="mt-1 text-sm text-slate-400">
            Coba gunakan kata kunci lain atau cek kembali ejaan
        </p>

        <button
            onClick={onClear}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:border-yellow-500 hover:text-yellow-600 hover:bg-yellow-50"
        >
            <X className="h-4 w-4" />
            Hapus pencarian
        </button>
    </motion.div>
);

interface SearchStatsProps {
    count: number;
    total: number;
    searchTerm: string;
}

const SearchStats = ({ count, total, searchTerm }: SearchStatsProps) => (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center text-sm text-slate-500"
    >
        {searchTerm ? (
            <>
                Menampilkan <span className="font-semibold text-slate-700">{count}</span> dari{" "}
                <span className="font-semibold text-slate-700">{total}</span> pengurus
                {count !== total && (
                    <span className="ml-2 text-xs text-slate-400">
                        (pencarian: "{searchTerm}")
                    </span>
                )}
            </>
        ) : (
            <>
                Total <span className="font-semibold text-slate-700">{total}</span> pengurus
            </>
        )}
    </motion.div>
);

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    isLoading: boolean;
}

const SearchInput = ({ value, onChange, isLoading }: SearchInputProps) => (
    <div className="relative group">
        <Search
            className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-colors ${value ? "text-yellow-500" : "text-slate-400"
                }`}
        />

        <input
            type="text"
            placeholder="Cari nama, jabatan, atau angkatan..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border-b border-slate-200 bg-transparent py-4 pl-12 pr-12 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-yellow-500"
            autoComplete="off"
            autoFocus
        />

        {isLoading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent" />
            </div>
        )}

        {value && !isLoading && (
            <button
                onClick={() => onChange("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-all hover:text-slate-600 hover:scale-110"
                aria-label="Clear search"
            >
                <X className="h-4 w-4" />
            </button>
        )}
    </div>
);

interface HighlightTextProps {
    text: string;
    highlight: string;
}

const HighlightText = ({ text, highlight }: HighlightTextProps) => {
    if (!highlight.trim()) return <>{text}</>;

    const normalizedHighlight = normalizeText(highlight);
    const textLower = normalizeText(text);

    if (!textLower.includes(normalizedHighlight)) return <>{text}</>;

    const startIndex = textLower.indexOf(normalizedHighlight);
    const endIndex = startIndex + normalizedHighlight.length;

    const before = text.slice(0, startIndex);
    const match = text.slice(startIndex, endIndex);
    const after = text.slice(endIndex);

    return (
        <>
            {before}
            <mark className="bg-yellow-100 text-slate-900 rounded px-0.5">
                {match}
            </mark>
            {after}
        </>
    );
};

interface PengurusItemProps {
    pengurus: Pengurus;
    searchTerm: string;
}

const PengurusItem = ({ pengurus, searchTerm }: PengurusItemProps) => (
    <motion.div
        variants={itemAnimation}
        layout
        className="group border-b border-slate-200 py-6 transition-all duration-300 hover:bg-slate-50/50 hover:pl-4"
    >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Left Section */}
            <div className="space-y-2 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">
                    {pengurus.jabatan}
                </p>

                <h2 className="text-xl font-bold tracking-tight text-slate-900 transition-all duration-300">
                    <HighlightText text={pengurus.nama} highlight={searchTerm} />
                </h2>
            </div>

            {/* Right Section */}
            <div className="shrink-0">
                <p className="text-sm text-slate-500">
                    <span className="text-slate-400">Angkatan </span>
                    <HighlightText text={pengurus.angkatan} highlight={searchTerm} />
                </p>
            </div>
        </div>
    </motion.div>
);

// Main Component
export default function Pengurus() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [filteredPengurus, setFilteredPengurus] = useState<Pengurus[]>(PENGURUS_DATA);
    const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.title = "Pengurus KBA17 - Struktur Organisasi";
    }, []);

    // Real-time search with debounce and relevance sorting
    const performSearch = useCallback((term: string) => {
        const trimmedTerm = term.trim();

        if (!trimmedTerm) {
            setFilteredPengurus(PENGURUS_DATA);
            return;
        }

        // First filter by match
        const matched = PENGURUS_DATA.filter((pengurus) =>
            isSearchMatch(pengurus, trimmedTerm)
        );

        // Then sort by relevance score
        const sorted = matched.sort((a, b) => {
            const scoreA = calculateRelevanceScore(a, trimmedTerm);
            const scoreB = calculateRelevanceScore(b, trimmedTerm);
            return scoreB - scoreA;
        });

        setFilteredPengurus(sorted);
    }, []);

    // Debounced search handler
    const handleSearchChange = useCallback(
        (value: string) => {
            setSearchTerm(value);
            setIsLoading(true);

            // Clear previous timer
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }

            // Set new timer
            debounceTimerRef.current = setTimeout(() => {
                performSearch(value);
                setIsLoading(false);
            }, DEBOUNCE_DELAY);
        },
        [performSearch]
    );

    const handleClearSearch = useCallback(() => {
        setSearchTerm("");
        setFilteredPengurus(PENGURUS_DATA);
        setIsLoading(false);

        // Focus back to search input
        searchInputRef.current?.focus();

        // Clear timer if exists
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
    }, []);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, []);

    const resultCount = filteredPengurus.length;
    const totalCount = PENGURUS_DATA.length;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_1px)] bg-size-[32px_32px]" />

                <div className="container relative mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
                        >
                            Struktur Organisasi
                        </motion.span>

                        <motion.h1
                            variants={fadeInUp}
                            className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
                        >
                            Pengurus KBA17
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="mt-6 text-lg leading-relaxed text-slate-500"
                        >
                            Kepengurusan Keluarga Besar Alumni SMA Negeri 17 Jakarta periode{" "}
                            {ORGANIZATION_PERIOD}.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mx-auto mt-8 h-1 w-24 rounded-full bg-yellow-500"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Search Section */}
            <section className="pb-10">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-xl"
                    >
                        <SearchInput
                            value={searchTerm}
                            onChange={handleSearchChange}
                            isLoading={isLoading}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Search Stats */}
            <section className="pb-4">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mx-auto max-w-5xl">
                        <SearchStats
                            count={resultCount}
                            total={totalCount}
                            searchTerm={searchTerm}
                        />
                    </div>
                </div>
            </section>

            {/* Organizational List Section */}
            <section className="pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={listAnimation}
                        className="mx-auto max-w-5xl"
                    >
                        <AnimatePresence mode="wait">
                            {resultCount > 0 ? (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {filteredPengurus.map((pengurus) => (
                                        <PengurusItem
                                            key={pengurus.id}
                                            pengurus={pengurus}
                                            searchTerm={searchTerm}
                                        />
                                    ))}
                                </motion.div>
                            ) : (
                                <EmptyState
                                    searchTerm={searchTerm}
                                    onClear={handleClearSearch}
                                    resultCount={resultCount}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
