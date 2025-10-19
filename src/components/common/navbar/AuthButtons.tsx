interface AuthButtonsProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
  isMobile?: boolean;
}

export function AuthButtons({
  onRegisterClick,
  onLoginClick,
  isMobile = false,
}: AuthButtonsProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-gray-200">
        <button
          onClick={onRegisterClick}
          className="px-4 py-2 rounded-full border-2 border-red-600 text-red-600 text-sm font-semibold hover:bg-red-600 hover:text-white transition"
        >
          Register
        </button>
        <button
          onClick={onLoginClick}
          className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
      <button
        onClick={onRegisterClick}
        className="px-4 py-2 rounded-full border-2 border-red-600 text-red-600 text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors whitespace-nowrap"
      >
        Register
      </button>

      <button
        onClick={onLoginClick}
        className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors whitespace-nowrap"
      >
        Login
      </button>
    </div>
  );
}
