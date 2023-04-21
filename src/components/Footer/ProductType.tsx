import * as t from 'io-ts';
import { createEnumType } from './index';

enum LinkType {
  internal = 'internal',
  external = 'external',
}

export const ProductType = t.interface({
  label: t.string,
  href: t.string,
  ariaLabel: t.string,
  linkType: createEnumType<LinkType>(LinkType, 'LinkTypeIoTs'),
});

export const ProductArrayType = t.readonlyArray(
  ProductType,
  'array of ProductType'
);
