import AuthGuard from "@/components/AuthGuard";

export default function ChooseLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
