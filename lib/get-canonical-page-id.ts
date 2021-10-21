import { ExtendedRecordMap } from 'notion-types';
import { parsePageId, uuidToId, getBlockTitle } from 'notion-utils';

import { inversePageUrlOverrides } from './config';

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null {
  const cleanPageId = parsePageId(pageId, { uuid: false });
  if (!cleanPageId) {
    return null;
  }

  const override = inversePageUrlOverrides[cleanPageId];
  if (override) {
    return override;
  } else {
    return getCanonicalPageIdImpl(pageId, recordMap, {
      uuid
    });
  }
}

/**
 * Gets the canonical, display-friendly version of a page's ID for use in URLs.
 */
// url path 에 한글 추가하기 위해 notion-utils 의 함수 대체
export const getCanonicalPageIdImpl = (
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | null => {
  if (!pageId || !recordMap) return null;

  const id = uuidToId(pageId);
  const block = recordMap.block[pageId]?.value;

  // if (block) {
  //   const title = normalizeTitle(getBlockTitle(block, recordMap));

  //   if (title) {
  //     if (uuid) {
  //       return `${title}-${id}`;
  //     } else {
  //       return title;
  //     }
  //   }
  // }

  return id;
};

export const normalizeTitle = (title: string | null): string => {
  return (title || '')
    .replace(/ /g, '-')
    .replace(/[^A-Za-z0-9가-힣-]/g, '')
    .replace(/--/g, '-')
    .replace(/-$/, '')
    .replace(/^-/, '')
    .trim()
    .toLowerCase();
};
