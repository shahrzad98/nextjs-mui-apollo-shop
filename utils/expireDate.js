export const expireDate = exp => {
  if (exp) {
    const now = new Date();
    const expireIn = new Date(exp);
    const result = (expireIn - now) / 1000;

    if (result <= 0 || isNaN(result)) return undefined;

    return {
      d: Math.floor(result / (60 * 60 * 24)) || undefined,
      h: Math.floor(((result % 60) * 60 * 24) / (60 * 60)) || undefined,
      m: Math.floor((result % (60 * 60)) / 60) || 0
    };
  }
  return undefined;
};

export const expireText = (exp, text = '', placeHolder = '') => {
  if (typeof exp === 'object' && ('d' in exp || 'h' in exp || 'm' in exp)) {
    const result = exp.d
      ? `${exp.d} روز`
      : exp?.h
      ? `${exp.h} ساعت`
      : exp.m
      ? `${exp.m} دقیقه`
      : undefined;
    return Boolean(result) ? result + text : placeHolder;
  } else {
    if (expireDate(exp)) {
      return expireText(expireDate(exp), text, placeHolder);
    } else {
      return placeHolder;
    }
  }
};
