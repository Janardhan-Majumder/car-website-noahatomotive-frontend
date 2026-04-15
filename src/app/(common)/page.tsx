import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Noah Automotive</h1>
      <div className="space-x-4">
        <Link href="/cars" className="bg-blue-500 text-white px-4 py-2 rounded">
          Browse Cars
        </Link>
        <Link href="/(auth)/login" className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link href="/(admin)/dashboard" className="bg-red-500 text-white px-4 py-2 rounded">
          Admin Panel
        </Link>
      </div>
    </div>
  );
}
