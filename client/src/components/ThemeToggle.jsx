import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/uiSlice';
import { Sun, Moon } from 'lucide-react';

/**
 * ThemeToggle – light/dark mode button, persisted in localStorage via Redux
 */
const ThemeToggle = ({ className = '' }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle dark mode"
      className={`flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-all ${className}`}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
};

export default ThemeToggle;
