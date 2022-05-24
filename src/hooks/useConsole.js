export default function useConsole(name) {
  const showName = () => console.log(`${name}is Rendered`);

  return { showName };
}
