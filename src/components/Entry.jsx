import locationPin from "../assets/images/marker.png";

export default function Entry() {
  return (
    <article className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-5xl mx-auto py-6 md:py-8 px-4 md:px-8 lg:px-8 border-b border-gray-200">
      <img
        className="w-full h-52 md:w-40 md:h-56 lg:w-44 lg:h-60 object-cover rounded-md shrink-0"
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        alt="Mount Fuji"
      />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center">
            <img
              className="w-2.5 mr-1.5"
              src={locationPin}
              alt="location pin icon"
            />

            <span className="uppercase tracking-[0.18em] text-xs text-base-content">
              Japan
            </span>
          </div>

          <a
            className="text-xs text-gray-400 underline hover:text-primary"
            href="https://maps.google.com/?q=Mount+Fuji"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-base-content mb-3 leading-none">
          Mount Fuji
        </h2>

        <p className="font-bold text-sm text-base-content mb-2">
          12 Jan, 2021 - 24 Jan, 2021
        </p>

        <p className="text-sm md:text-base leading-relaxed text-base-content/80 max-w-2xl">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
