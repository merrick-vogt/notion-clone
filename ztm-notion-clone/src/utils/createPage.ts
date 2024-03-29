import { nanoid } from 'nanoid';
import { Page } from './types';

export const createPage = () => {
    const slug = nanoid();
    const id = nanoid();
  
    const page: Page = {
      title: 'Untitled',
      id,
      slug,
      nodes: [],
      cover: 'https://source.unsplash.com/random/800x600'
    }
  
    return page;
  }