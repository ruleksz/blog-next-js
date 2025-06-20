import Link from 'next/link';

export const dynamic = "force-dynamic";

export default async function Page({ params }) {
    const res = await fetch(`http://localhost:8000/api/berita/${params.slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return <h1>Berita tidak ditemukan</h1>;
    }

    const post = await res.json();

    return (
        <main className="max-w-3xl mx-auto px-4 py-6">
            <Link href={`/blog`} className="mb-8 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                ← Kembali ke Daftar Berita
            </Link>
            {post.image && (
                <img
                    src={`http://localhost:8000${post.image}`}
                    alt={post.title}
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
            )}

            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            <div className="text-gray-800 leading-relaxed text-justify mb-8">
                {post.content}
            </div>

            
        </main>
    );
}
