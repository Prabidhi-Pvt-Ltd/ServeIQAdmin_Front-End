export function Links() {
  return (
    <div className="hidden lg:flex items-center gap-8 xl:gap-11">
      <a
        href="/"
        className="text-neutral-500 text-sm hover:text-black transition-colors py-5"
      >
        Home
      </a>
      <a
        href="/about"
        className="text-neutral-500 text-sm hover:text-red-700 transition-colors  py-5"
      >
        About us
      </a>
      <a
        href="/plans"
        className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-5"
      >
        Plan and Services
      </a>
      <a
        href="/blogs"
        className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-5"
      >
        Blogs
      </a>
      <a
        href="/customer-care"
        className="text-neutral-500 text-sm hover:text-red-700  transition-colors py-5"
      >
        Customer Care
      </a>
    </div>
  );
}
