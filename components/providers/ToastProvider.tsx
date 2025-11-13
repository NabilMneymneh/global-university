"use client";

import { useToast, ToastContainer } from "@/components/ui/toast";

export function ToastProvider() {
  const { toasts, removeToast } = useToast();
  return <ToastContainer toasts={toasts} onRemove={removeToast} />;
}

