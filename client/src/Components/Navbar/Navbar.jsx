import Logo from "../../utils/img.json";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-950 to-blue-700 h-16 flex rounded-b-lg">
        <img
          className="h-16 w-auto rounded-b-lg"
          src={Logo.logo_nav}
          alt="Logo ProDev"
        />
        <div className="flex w-2/4 ml-56 justify-between items-center">
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
            aria-expanded="false"
          >
            Productos
            <svg
              class="h-5 w-5 flex-none text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
            aria-expanded="false"
          >
            Recursos
          </button>
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
            aria-expanded="false"
          >
            Nosotros
          </button>
          <button
            type="button"
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
            aria-expanded="false"
          >
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
