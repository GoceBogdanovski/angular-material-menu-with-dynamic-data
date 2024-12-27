export interface MenuModel {
  id: number;
  name: string;
  link: string | null;
  children: MenuModel[];
}
