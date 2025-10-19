import { SearchBar } from "./SearchBar";
import { NavLinks } from "./NavLinks";
import { LanguageSelector } from "./LanguageSelector";
import { AuthButtons } from "./AuthButtons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLinkClick: (sectionId: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onLoginClick,
  onRegisterClick,
  onLinkClick,
}: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = (sectionId: string) => {
    onClose();
    onLinkClick(sectionId);
  };

  return (
    <div className="xl:hidden border-t border-gray-200 bg-white">
      <div className="flex flex-col px-4 py-3 space-y-3">
        <SearchBar isMobile onResultClick={onClose} />

        <NavLinks isMobile onLinkClick={handleLinkClick} />

        <LanguageSelector isMobile onClose={onClose} />

        <AuthButtons
          isMobile
          onRegisterClick={() => {
            onRegisterClick();
            onClose();
          }}
          onLoginClick={() => {
            onLoginClick();
            onClose();
          }}
        />
      </div>
    </div>
  );
}
