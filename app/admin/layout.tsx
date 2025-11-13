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
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    async function checkAuth() {
      try {
        // Check if we're in the browser
        if (typeof window === "undefined") {
          return;
        }

        const currentUser = await getCurrentUser();
        
        if (!mounted) return;

        if (!currentUser) {
          setLoading(false);
          router.push("/admin/login");
          return;
        }

        const data = await getUserData(currentUser.uid);
        
        if (!mounted) return;

        if (!data || (data.role !== "admin" && data.role !== "editor")) {
          setLoading(false);
          setError("You don't have permission to access the admin portal.");
          setTimeout(() => {
            router.push("/");
          }, 2000);
          return;
        }

        setUser(currentUser);
        setUserData(data);
        setLoading(false);
      } catch (err: any) {
        console.error("Error verifying admin access:", err);
        if (!mounted) return;
        
        const errorMessage = err?.message || "Unknown error";
        setError(
          `We couldn't verify your admin session: ${errorMessage}. Please try logging in again.`
        );
        setLoading(false);
        
        // Redirect to login after showing error
        setTimeout(() => {
          router.push("/admin/login");
        }, 3000);
      }
    }

    checkAuth();

    return () => {
      mounted = false;
    };
  }, [router]);

  const handleLogout = async () => {
    await logOut();
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/20">
        <div className="text-center space-y-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading admin portal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-muted/20 px-6 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Admin Portal Error</h1>
        <p className="max-w-xl text-muted-foreground">{error}</p>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.refresh()}>
            Retry
          </Button>
          <Button onClick={() => router.push("/admin/login")}>Go to Login</Button>
        </div>
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
        <div className="container-shell">
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

      <main className="container-shell py-8">
        {children}
      </main>
    </div>
  );
}

