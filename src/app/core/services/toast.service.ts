import { Injectable, signal } from '@angular/core';
import { ToastItem, ToastType } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastId = 0;

  readonly toasts = signal<ToastItem[]>([]);

  show(
    message: string,
    type: ToastType = 'info',
    duration: number = 3000,
  ): void {
    const id = ++this.toastId;

    const toast: ToastItem = {
      id,
      message,
      type,
      duration,
    };

    this.toasts.update((current) => [...current, toast]);

    window.setTimeout(() => {
      this.remove(id);
    }, duration);
  }

  success(message: string, duration = 3000): void {
    this.show(message, 'success', duration);
  }

  info(message: string, duration = 3000): void {
    this.show(message, 'info', duration);
  }

  warning(message: string, duration = 3500): void {
    this.show(message, 'warning', duration);
  }

  error(message: string, duration = 4000): void {
    this.show(message, 'error', duration);
  }

  remove(id: number): void {
    this.toasts.update((current) => current.filter((toast) => toast.id !== id));
  }

  clear(): void {
    this.toasts.set([]);
  }
}