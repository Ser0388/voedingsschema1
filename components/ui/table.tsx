export function Table({ children }: any) {
  return <table className="w-full border">{children}</table>;
}
export function TableHeader({ children }: any) {
  return <thead className="bg-gray-100">{children}</thead>;
}
export function TableBody({ children }: any) {
  return <tbody>{children}</tbody>;
}
export function TableRow({ children }: any) {
  return <tr className="border-t">{children}</tr>;
}
export function TableHead({ children }: any) {
  return <th className="text-left p-2">{children}</th>;
}
export function TableCell({ children }: any) {
  return <td className="p-2 border-t">{children}</td>;
}