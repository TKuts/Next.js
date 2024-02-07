import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>This is meal page</h1>
      <p>
        <Link href="/meals/share">Share Link</Link>
      </p>
      <p>
        <Link href="/meals/">some_slug</Link>
      </p>
    </main>
  );
}
