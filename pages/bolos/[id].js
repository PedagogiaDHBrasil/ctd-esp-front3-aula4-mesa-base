export default function Bolos() {
  return {};
}

export async function getStaticProps() {
  await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/`);
}

export async function getStaticPaths() {
  return {};
}
