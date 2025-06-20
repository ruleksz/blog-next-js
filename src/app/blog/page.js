import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function BlogList() {
    const res = await fetch("http://localhost:8000/api/berita", {
        cache: "no-store",
    });
    const berita = await res.json();

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">📰 Berita Terkini</h1>

            <div className="grid sm:grid-cols-2 gap-6">
                {berita.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-lg transition"
                    >
                        {item.image && (
                            <img
                                src={`http://localhost:8000${item.image}`}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h2>
                            <p className="text-gray-600 text-sm line-clamp-3 mb-3">{item.content.slice(0, 120)}...</p>
                            <Link href={`/blog/${item.slug}`} className="text-blue-600">
                                Baca Selengkapnya
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
