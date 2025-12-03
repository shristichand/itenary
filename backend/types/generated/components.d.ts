import type { Schema, Struct } from '@strapi/strapi';

export interface ItenaryItenary extends Struct.ComponentSchema {
  collectionName: 'components_itenary_itenaries';
  info: {
    displayName: 'Itenary';
  };
  attributes: {
    Day: Schema.Attribute.String;
    ListItem: Schema.Attribute.Component<'list-item.list-item', true>;
  };
}

export interface ListItemListItem extends Struct.ComponentSchema {
  collectionName: 'components_list_item_list_items';
  info: {
    displayName: 'ListItem';
  };
  attributes: {
    ListItem: Schema.Attribute.Text;
  };
}

export interface PlacePlaces extends Struct.ComponentSchema {
  collectionName: 'components_place_places';
  info: {
    displayName: 'Places';
  };
  attributes: {
    placeName: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'itenary.itenary': ItenaryItenary;
      'list-item.list-item': ListItemListItem;
      'place.places': PlacePlaces;
    }
  }
}
