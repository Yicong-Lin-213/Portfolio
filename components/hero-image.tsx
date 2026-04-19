import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative group">
      <div className="relative w-72 h-72 md:w-90 md:h-90 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 -rotate-2">
        <div className="absolute inset-0 bg-linear-to-b from-slate-50 to-slate-200 flex items-center justify-center text-slate-300">
          <Image 
            src="/images/portrait.jpg"
            alt="Yicong Lin"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 288px, 360px"
          />
        </div>
      </div>
    </div>
  );
}