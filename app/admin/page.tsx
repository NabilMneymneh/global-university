"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts, Post } from "@/lib/firebase/posts";
import { getAllUsers } from "@/lib/firebase/users";
import { FileText, Users, Eye, TrendingUp } from "lucide-react";
import { LoadingSpinner, LoadingSkeleton } from "@/components/ui/loading-spinner";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalUsers: 0,
    publishedPosts: 0,
    draftPosts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [posts, users] = await Promise.all([
          getPosts(),
          getAllUsers(),
        ]);

        const published = posts.filter((p) => p.published).length;
        const drafts = posts.filter((p) => !p.published).length;

        setStats({
          totalPosts: posts.length,
          totalUsers: users.length,
          publishedPosts: published,
          draftPosts: drafts,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <LoadingSkeleton className="h-4 w-24" />
                <LoadingSkeleton className="h-4 w-4 rounded" />
              </CardHeader>
              <CardContent>
                <LoadingSkeleton className="h-8 w-16 mb-2" />
                <LoadingSkeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Posts",
      value: stats.totalPosts,
      description: `${stats.publishedPosts} published, ${stats.draftPosts} drafts`,
      icon: FileText,
    },
    {
      title: "Total Users",
      value: stats.totalUsers,
      description: "Registered users",
      icon: Users,
    },
    {
      title: "Published Posts",
      value: stats.publishedPosts,
      description: "Live on website",
      icon: Eye,
    },
    {
      title: "Draft Posts",
      value: stats.draftPosts,
      description: "Pending publication",
      icon: TrendingUp,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

