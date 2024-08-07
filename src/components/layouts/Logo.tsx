import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="text-xl">
      <div className="text-2xl font-neon drop-shadow-neon">
        <span>L</span>
        <span className="ml-0.5 text-primary">.</span>
        <span>Garcia</span>
      </div>
    </Link>
  );
}

export default Logo;
