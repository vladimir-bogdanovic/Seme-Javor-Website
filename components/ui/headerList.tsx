import Link from "next/link";

type navItemProps = {
  label: string;
  url: string;
};

export default function HeaderNavList({ label, url }: navItemProps) {
  return (
    <li className="cursor-pointer transition-opacity duration-200 hover:opacity-80">
      <Link href={url}>{label}</Link>
    </li>
  );
}
