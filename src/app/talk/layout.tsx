import AuthGuard from "@/components/AuthGuard";

export default function TalkLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}
