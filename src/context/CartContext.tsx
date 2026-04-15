import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export interface CartItem {
  name: string;
  kg: number;
  pricePerKg: number;
}

interface CartContextType {
  items: CartItem[];
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addItem: (name: string, pricePerKg: number, kg?: number) => void;
  updateItem: (name: string, kg: number) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalKg: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback((name: string, pricePerKg: number, kg = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) =>
          i.name === name ? { ...i, kg: i.kg + kg } : i
        );
      }
      return [...prev, { name, kg, pricePerKg }];
    });
    setDrawerOpen(true);
  }, []);

  const updateItem = useCallback((name: string, kg: number) => {
    if (kg <= 0) {
      setItems((prev) => prev.filter((i) => i.name !== name));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.name === name ? { ...i, kg } : i))
      );
    }
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.length;
  const totalKg = items.reduce((s, i) => s + i.kg, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        drawerOpen,
        setDrawerOpen,
        addItem,
        updateItem,
        removeItem,
        clearCart,
        totalItems,
        totalKg,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
