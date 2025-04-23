export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-lg shadow-sm p-4 mb-4">{children}</div>;
}
export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}