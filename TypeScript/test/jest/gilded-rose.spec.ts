import { Item, GildedRose } from '@/gilded-rose';
import { ItemManager } from '../../app/item-manager';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const newListItem = [new Item('foo', 0, 0)];
    const itemManager = new ItemManager();
    const gildedRose = new GildedRose(newListItem, itemManager);
    const items = gildedRose.dayGoneBy();
    // expect(items[0].name).toBe('fixme');
  });
});
