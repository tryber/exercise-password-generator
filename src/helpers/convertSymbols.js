const convert = (str) => {
  str = str.replaceAll('&amp;', '&');
  str = str.replaceAll('&lt;', '<');
  str = str.replaceAll('&gt;', '>');
  str = str.replaceAll('&quot;', '"');
  return str;
};

export default convert;
