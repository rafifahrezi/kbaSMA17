import { useEffect, useMemo, useState } from "react";
import { Search, UserPlus, Table as TableIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../lib/firebase";

import { Input } from "./../components/ui/input";
import { Button } from "./../components/ui/button";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./../components/ui/table";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./../components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./../components/ui/form";

import {
    Avatar,
    AvatarFallback
} from "./../components/ui/avatar";

import { useToast } from "./../hooks/use-toast";

/* -------------------------------------------------------------------------- */
/*                                   Schema                                   */
/* -------------------------------------------------------------------------- */

const anggotaSchema = z.object({
    nama: z.string().min(2, "Nama minimal 2 karakter"),

    angkatan: z.coerce
        .number()
        .min(1980, "Tahun tidak valid")
        .max(new Date().getFullYear(), "Tahun tidak valid"),

    email: z.string().email("Email tidak valid"),

    pekerjaan: z.string().optional(),

    whatsapp: z.string().optional(),
});

type AnggotaFormValues = z.infer<typeof anggotaSchema>;

type AnggotaItem = {
    id: string;
    nama: string;
    angkatan: number;
    email: string;
    pekerjaan?: string;
    whatsapp?: string;
    createdAt?: string;
};

/* -------------------------------------------------------------------------- */
/*                              Helper Function                               */
/* -------------------------------------------------------------------------- */

function formatMonthYear(dateString?: string) {
    if (!dateString) return "-";

    return new Intl.DateTimeFormat("id-ID", {
        month: "short",
        year: "numeric",
    }).format(new Date(dateString));
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function Anggota() {
    const [searchTerm, setSearchTerm] = useState("");

    const [anggotaList, setAnggotaList] = useState<AnggotaItem[]>([]);

    const [loading, setLoading] = useState(true);

    const { toast } = useToast();

    useEffect(() => {
        document.title = "Daftar Anggota | KBA17";

        fetchAnggota();
    }, []);

    /* ---------------------------------------------------------------------- */
    /*                              Fetch Firebase                            */
    /* ---------------------------------------------------------------------- */

    const fetchAnggota = async () => {
        try {
            setLoading(true);

            const q = query(
                collection(db, "anggota"),
                orderBy("createdAt", "desc")
            );

            const snapshot = await getDocs(q);

            const result: AnggotaItem[] = snapshot.docs.map((doc) => {
                const data = doc.data();

                return {
                    id: doc.id,
                    nama: data.nama,
                    angkatan: data.angkatan,
                    email: data.email,
                    pekerjaan: data.pekerjaan || "",
                    whatsapp: data.whatsapp || "",
                    createdAt: data.createdAt?.toDate?.().toISOString(),
                };
            });

            setAnggotaList(result);
        } catch (error) {
            console.error(error);

            toast({
                variant: "destructive",
                title: "Gagal mengambil data",
                description: "Terjadi kesalahan saat mengambil data anggota.",
            });
        } finally {
            setLoading(false);
        }
    };

    /* ---------------------------------------------------------------------- */
    /*                               Search Data                              */
    /* ---------------------------------------------------------------------- */

    const filteredAnggota = useMemo(() => {
        if (!searchTerm.trim()) return anggotaList;

        const keyword = searchTerm.toLowerCase();

        return anggotaList.filter((anggota) => {
            return (
                anggota.nama.toLowerCase().includes(keyword) ||
                anggota.pekerjaan?.toLowerCase().includes(keyword) ||
                anggota.angkatan.toString().includes(keyword)
            );
        });
    }, [anggotaList, searchTerm]);

    return (
        <div className="flex min-h-screen flex-col bg-background">
            {/* Hero */}
            <section className="border-b bg-primary/5 py-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Daftar Anggota
                            </h1>

                            <p className="text-muted-foreground">
                                Temukan teman seangkatan dan perluas jaringan
                                profesional Anda.
                            </p>
                        </div>

                        <RegisterDialog onSuccess={fetchAnggota} />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="flex-1 py-8">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Search */}
                    <div className="relative mb-8 max-w-md">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Cari nama, angkatan, atau pekerjaan..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    {/* Table */}
                    <div className="overflow-hidden rounded-md border bg-card">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="w-75">
                                        Nama Alumni
                                    </TableHead>

                                    <TableHead>Angkatan</TableHead>

                                    <TableHead>Pekerjaan</TableHead>

                                    <TableHead className="text-right">
                                        Bergabung
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={4}
                                            className="h-40 text-center"
                                        >
                                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Memuat data...
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : filteredAnggota.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={4}
                                            className="h-40 text-center"
                                        >
                                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                                                <TableIcon className="mb-2 h-8 w-8 opacity-20" />
                                                <p>Data tidak ditemukan</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAnggota.map((anggota) => (
                                        <TableRow
                                            key={anggota.id}
                                            className="hover:bg-muted/30"
                                        >
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9 border border-border/50">

                                                        <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                                                            {anggota.nama
                                                                .substring(0, 2)
                                                                .toUpperCase()}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <span className="truncate">
                                                        {anggota.nama}
                                                    </span>
                                                </div>
                                            </TableCell>

                                            <TableCell>
                                                <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                                                    {anggota.angkatan}
                                                </span>
                                            </TableCell>

                                            <TableCell className="max-w-50 truncate text-muted-foreground">
                                                {anggota.pekerjaan || "-"}
                                            </TableCell>

                                            <TableCell className="whitespace-nowrap text-right text-sm text-muted-foreground">
                                                {formatMonthYear(
                                                    anggota.createdAt
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                             Register Dialog                                */
/* -------------------------------------------------------------------------- */

type RegisterDialogProps = {
    onSuccess: () => void;
};

function RegisterDialog({ onSuccess }: RegisterDialogProps) {
    const { toast } = useToast();

    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const form = useForm<AnggotaFormValues>({
        resolver: zodResolver(anggotaSchema),

        defaultValues: {
            nama: "",
            angkatan: new Date().getFullYear(),
            email: "",
            pekerjaan: "",
            whatsapp: "",
        },
    });

    /* ---------------------------------------------------------------------- */
    /*                               Submit Data                              */
    /* ---------------------------------------------------------------------- */

    const onSubmit = async (data: AnggotaFormValues) => {
        try {
            setLoading(true);

            await addDoc(collection(db, "anggota"), {
                ...data,
                createdAt: serverTimestamp(),
            });

            toast({
                title: "Pendaftaran Berhasil",
                description: "Selamat datang di KBA17!",
            });

            form.reset();

            setOpen(false);

            onSuccess();
        } catch (error) {
            console.error(error);

            toast({
                variant: "destructive",
                title: "Pendaftaran Gagal",
                description: "Terjadi kesalahan saat menyimpan data.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="shrink-0 gap-2">
                    <UserPlus className="h-4 w-4" />
                    Daftar Anggota Baru
                </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-125">
                <DialogHeader>
                    <DialogTitle>Registrasi Anggota KBA17</DialogTitle>

                    <DialogDescription>
                        Isi data diri Anda untuk bergabung ke dalam database
                        alumni SMAN 17 Jakarta Barat.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 pt-4"
                    >
                        <FormField
                            control={form.control}
                            name="nama"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Lengkap</FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Sesuai ijazah"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="angkatan"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tahun Lulus</FormLabel>

                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="2020"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="whatsapp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            No. WhatsApp
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="08..."
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="email@contoh.com"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="pekerjaan"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Pekerjaan / Instansi
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            placeholder="Software Engineer"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Menyimpan...
                                </div>
                            ) : (
                                "Kirim Pendaftaran"
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}