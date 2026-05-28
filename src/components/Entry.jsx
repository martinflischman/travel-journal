import locationPin from "../assets/images/marker.png";

export default function Entry() {
  return (
    <article className="flex gap-6 max-w-2xl mx-auto py-8 border-b border-base-300">
      <img
        className="w-40 h-48 object-cover rounded-xl shrink-0"
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        alt="blog image"
      />
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
          <img className="w-3" src={locationPin} alt="location pin icon" />
          <span>Japan</span>
          <a
            className="underline font-normal normal-case tracking-normal text-gray-400 hover:text-primary"
            href="https://maps.google.com/?q=Mount+Fuji"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="text-3xl font-black text-base-content">Mount Fuji</h2>
        <p className="font-bold text-sm text-base-content">
          12 Jan, 2021 - 24 Jan, 2021
        </p>
        <p className="text-base-content/60 text-sm leading-relaxed">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
