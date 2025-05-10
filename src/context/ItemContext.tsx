import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Item = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: ImageSourcePropType;
};

type ItemContextType = {
  items: Item[];
  addItem: (item: Item) => void;
};

const ItemContext = createContext<ItemContextType>({} as ItemContextType);

export function ItemProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(item: Item) {
    setItems((prev) => [...prev, item]);
  }

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItemContext() {
  return useContext(ItemContext);
}
