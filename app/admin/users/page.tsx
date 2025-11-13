"use client";

import { useEffect, useState } from "react";
import { getAllUsers, updateUserRole, deleteUser } from "@/lib/firebase/users";
import { UserData, UserRole } from "@/lib/firebase/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signUp } from "@/lib/firebase/auth";
import { LoadingSpinner, LoadingSkeleton } from "@/components/ui/loading-spinner";
import { toast } from "@/components/ui/toast";

export default function UsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState<UserRole>("editor");
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const allUsers = await getAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddUser(e: React.FormEvent) {
    e.preventDefault();
    if (!newUserEmail || !newUserPassword) {
      toast("Please fill in all fields", "warning");
      return;
    }
    if (newUserPassword.length < 6) {
      toast("Password must be at least 6 characters", "warning");
      return;
    }
    try {
      await signUp(newUserEmail, newUserPassword, newUserRole);
      toast("User created successfully!", "success");
      setNewUserEmail("");
      setNewUserPassword("");
      setShowAddForm(false);
      fetchUsers();
    } catch (error: any) {
      toast(error.message || "Failed to create user", "error");
    }
  }

  async function handleUpdateRole(uid: string, role: UserRole) {
    try {
      await updateUserRole(uid, role);
      toast("User role updated successfully", "success");
      fetchUsers();
    } catch (error: any) {
      toast(error.message || "Failed to update role", "error");
    }
  }

  async function handleDeleteUser(uid: string) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(uid);
      toast("User deleted successfully", "success");
      fetchUsers();
    } catch (error: any) {
      toast(error.message || "Failed to delete user", "error");
    }
  }

  if (loading) {
    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Management</h1>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <LoadingSkeleton className="h-6 w-48 mb-2" />
                <LoadingSkeleton className="h-4 w-32" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancel" : "Add User"}
        </Button>
      </div>

      {showAddForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
            <CardDescription>Create a new user account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={newUserPassword}
                  onChange={(e) => setNewUserPassword(e.target.value)}
                  required
                  className="w-full rounded-md border border-border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={newUserRole}
                  onChange={(e) => setNewUserRole(e.target.value as UserRole)}
                  className="w-full rounded-md border border-border px-3 py-2"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
              <Button type="submit">Create User</Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {users.map((user) => (
          <Card key={user.uid}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{user.email}</CardTitle>
                  <CardDescription>Role: {user.role}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleUpdateRole(user.uid, e.target.value as UserRole)}
                    className="rounded-md border border-border px-2 py-1 text-sm"
                  >
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteUser(user.uid)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

