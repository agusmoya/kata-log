import { Item } from "./gilded-rose";
import { SpecialItems } from "./utils/special-items.enum";

export class ItemManager {

  private itemIsConjured(item: Item): boolean {
    return item.name.includes(SpecialItems.CONJURED);
  }

  public manageItems(items: Array<Item>) {
    this.updateQuality(items)

  }

  private updateSellIn(item: Item) {
    if (item.name != SpecialItems.SULFURAS) {
      item.sellIn -= 1;
    }
  }

  private filterItemType(item: Item) {
    switch (item) {
      case item:

        break;

      default:
        break;
    }
  }

  public updateQuality(items: Array<Item>): Array<Item> {

    for (let i = 0; i < items.length; i++) {
      // si no aniejan
      if (
          items[i].name != SpecialItems.AGED_BRIE &&
          items[i].name != SpecialItems.BACKSTAGE_PASSES
        ) {
        // porque calidad no puede ser negativa
        if (items[i].quality > 0) {
          // legendaria no puede disminuir calidad
          if (items[i].name != SpecialItems.SULFURAS) {
            items[i].quality -= 1
          }

          if ( this.itemIsConjured(items[i]) ) {
            items[i].quality -= 2
          }
        }

      // si se anieja
      } else {

        if (items[i].quality < 50) {

          items[i].quality = items[i].quality + 1

          if (items[i].name == SpecialItems.BACKSTAGE_PASSES) {
            if (items[i].sellIn < 11) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
            if (items[i].sellIn < 6) {
              if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
              }
            }
          }
        }

      }

      if (items[i].name != SpecialItems.SULFURAS) {
        items[i].sellIn -= 1;
      }

      if (items[i].sellIn < 0) {
        if (items[i].name != SpecialItems.AGED_BRIE) {
          if (items[i].name != SpecialItems.BACKSTAGE_PASSES) {
            if (items[i].quality > 0) {
              if (items[i].name != SpecialItems.SULFURAS) {
                items[i].quality -= 1
              }
            }
          } else {
            items[i].quality = items[i].quality - items[i].quality
          }
        } else {
          if (items[i].quality < 50) {
            items[i].quality = items[i].quality + 1
          }
        }
      }
    }

    return items;
  }

}
