const getChildrenDepth = categories => {
  return categories?.id
    ? [
        { title: categories?.title, link: categories?.link || null },
        categories?.child?.id && {
          title: categories?.child?.title,
          link: categories?.child?.link
        }
        // ...(categories?.child?.id ? getChildrenDepth(categories?.child) : [])
      ].filter(Boolean)
    : [];
};

export default getChildrenDepth;
