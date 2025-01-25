export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid grid-cols-4 p-24">{children}</div>;
}
