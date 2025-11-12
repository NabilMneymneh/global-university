"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, getUserData, UserData } from "@/lib/firebase/auth";
import { User } from "firebase/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logOut } from "@/lib/firebase/auth";
import { Home, Users, FileText, Image, Settings, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push("/admin/login");
        return;
      }

      const data = await getUserData(currentUser.uid);
      if (!data || (data.role !== "admin" && data.role !== "editor")) {
        router.push("/");
        return;
      }

      setUser(currentUser);
      setUserData(data);
      setLoading(false);
    }
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await logOut();
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user || !userData) {
    return null;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Users", href: "/admin/users", icon: Users, adminOnly: true },
    { name: "Posts", href: "/admin/posts", icon: FileText },
    { name: "Media", href: "/admin/media", icon: Image },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="text-xl font-bold text-primary">
                Admin Portal
              </Link>
              <div className="hidden md:flex gap-4">
                {navItems
                  .filter((item) => !item.adminOnly || userData.role === "admin")
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user.email}</span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

