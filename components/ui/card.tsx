export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`border rounded-lg shadow-sm p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
