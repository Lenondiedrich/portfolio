export function getFlagSrc(pathname: string){
  if (pathname.includes('pt')) {
    return '/flags/brasil.svg';
  } else if (pathname.includes('en')) {
    return '/flags/usa.svg';
  } else {
    return ''
  }
};