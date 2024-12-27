import { MenuModel } from '../models/menu.model';

export function getMenuData() {
  const menuItems: MenuModel[] = [
    {
      id: 1,
      name: 'Node 1',
      link: null,
      children: [
        {
          id: 2,
          name: 'Sub Node 1.1',
          link: '/subnode11',
          children: [],
        },
        {
          id: 3,
          name: 'Sub Node 1.1',
          link: '/subnode12',
          children: [],
        },
      ],
    },
    {
      name: 'Node 2',
      id: 4,
      link: null,
      children: [
        {
          name: 'Sub Node 2.1',
          id: 5,
          link: null,
          children: [
            {
              id: 6,
              name: 'Sub Node 2.1.1',
              link: '/subnode211',
              children: [],
            },
            {
              id: 7,
              name: 'Sub Node 2.1.2',
              link: '/subnode212',
              children: [],
            },
          ],
        },
        {
          name: 'Sub Node 2.2',
          link: '/subnode22',
          id: 8,
          children: [],
        },
      ],
    },
  ];
  return menuItems;
}
