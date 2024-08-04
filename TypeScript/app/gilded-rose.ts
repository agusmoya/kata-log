import { ItemManager } from './item-manager';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  itemManager: ItemManager;

  constructor(items = [] as Array<Item>, itemManager: ItemManager) {
    this.items = items;
    this.itemManager = itemManager;
  }

  dayGoneBy() {
    this.itemManager.manageItems(this.items);
  }
}
