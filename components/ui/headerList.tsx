type navItemProps = {
  label: string;
};

export default function HeaderNavList({ label }: navItemProps) {
  return (
    <li className="cursor-pointer transition-opacity duration-200 hover:opacity-80">
      {label}
    </li>
  );
}
