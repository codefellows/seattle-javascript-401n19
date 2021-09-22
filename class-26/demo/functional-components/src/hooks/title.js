export default function useTitle() {
  const changeTitle = (title) => (document.title = title);
  return changeTitle;
}
