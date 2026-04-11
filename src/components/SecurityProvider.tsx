'use client';

import React, { useEffect } from 'react';

/**
 * SecurityProvider (Quantum Shield)
 * Реализует строгие меры 'No Copy' согласно требованиям PSB Bank.
 */
export default function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Отключение контекстного меню (Правая кнопка мыши)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Отключение горячих клавиш (Ctrl+C, Ctrl+U, F12, и др.)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrl = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      if (
        (isCtrl && (key === 'c' || key === 'v' || key === 'u' || key === 's' || key === 'p')) ||
        e.key === 'F12' ||
        (isCtrl && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Отключение события копирования
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // 4. Отключение выделения текста (JS Fallback)
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Добавляем слушатели
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('selectstart', handleSelectStart);

    // Очистка при размонтировании
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return (
    <div className="min-h-screen select-none outline-none">
      {children}
    </div>
  );
}
