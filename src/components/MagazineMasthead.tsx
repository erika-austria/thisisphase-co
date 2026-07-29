type MagazineMastheadProps = {
  issue?: string;
  date?: string;
  topics?: string[];
  publishingNote?: string;
};

// Retired: the global <Nav> now provides the top navigation + announcement bar.
// Kept as a no-op (props signature preserved) so existing imports/usages compile,
// but it renders nothing so there is no second, duplicate header strip.
export function MagazineMasthead(_props: MagazineMastheadProps) {
  return null;
}
