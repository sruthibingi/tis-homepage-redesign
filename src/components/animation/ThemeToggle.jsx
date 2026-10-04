import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark';
  return <button className="icon-button" onClick={onToggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
