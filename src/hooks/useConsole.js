export default function useConsole(component) {
  const showIsRendered = () => console.log(`${component}is Rendered`);

  return { showIsRendered };
}
