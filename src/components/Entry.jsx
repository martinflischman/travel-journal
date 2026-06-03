import locationPin from "../assets/images/marker.png";

export default function Entry(props) {
  return (
    <article className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-5xl mx-auto py-6 md:py-8 px-4 md:px-8 lg:px-8 border-b border-gray-200">
      <img
        className="w-full h-52 md:w-40 md:h-56 lg:w-44 lg:h-60 object-cover rounded-md shrink-0"
        src={props.img.src}
        alt={props.img.alt}
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
              {props.country}
            </span>
          </div>

          <a
            className="text-xs text-gray-400 underline hover:text-primary"
            href={props.googleMapsLink}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-base-content mb-3 leading-none">
          {props.title}
        </h2>

        <p className="font-bold text-sm text-base-content mb-2">
          {props.dates}
        </p>

        <p className="text-sm md:text-base leading-relaxed text-base-content/80 max-w-2xl">
          {props.text}
        </p>
      </div>
    </article>
  );
}
