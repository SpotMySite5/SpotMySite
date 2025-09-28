import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Spot my Site">
      <Image src={Logo1} height={48} alt="LOGO: Spot my Site" />
    </Link>
  );
}
