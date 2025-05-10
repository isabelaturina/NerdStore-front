export type Item = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: any;
};

export const items: Item[] = [
  {
    id: '1',
    title: 'Deadpool',
    category: 'ActionFigure',
    price: 'R$ 129,00',
    image: require('../../assets/deadpool.jpg'),
  },
  {
    id: '2',
    title: 'Monkey D. Luffy',
    category: 'ActionFigure',
    price: 'R$ 129,00',
    image: require('../../assets/luffy.jpg'),
  },
  {
    id: '3',
    title: 'Playstation 1',
    category: 'Console',
    price: 'R$ 199,00',
    image: require('../../assets/ps1.jpg'),
  },
  {
    id: '4',
    title: 'Camiseta Naruto',
    category: 'Roupa',
    price: 'R$ 89,90',
    image: require('../../assets/camisetanaruto.png'),
  },
];
