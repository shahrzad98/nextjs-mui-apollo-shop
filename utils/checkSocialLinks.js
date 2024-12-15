import { SOCIAL_DEFAULT_LINKS } from 'constant/socialMedia';

export const checkSocialLinks = (key, link) => {
  if (!link && key) return SOCIAL_DEFAULT_LINKS[key];
  if (key && !link.includes('http') && link.includes('www'))
    return `https://${link}`;
  if (key && !link.includes('http'))
    return `${SOCIAL_DEFAULT_LINKS[key]}/${link}`;
  return link;
};
