
import React, { useState, useEffect } from 'react';
import { CheckIcon, StarIcon } from './Icons';

const KITS = [
  {
    id: 'kit-gaoy',
    name: "Complete GAOY Gel Nail Starter Kit with Mini UV",
    price: 25.99,
    salePrice: 14.39,
    description: "Full GAOY starter kit with 6 trendy gel colors, mini UV lamp, base & top coat, and tools. Easy DIY set for long-lasting shiny nails anywhere you go.",
    images: [
        "https://m.media-amazon.com/images/I/61RTaebWEuL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/715yrLkM04L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61jV1qjzY2L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61MjExtqGUL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61RqXueiQML._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Z+gmdotGL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61NzG-t7X4L._SL1500_.jpg"
    ],
    features: ["6 colors – trendy mix", "Mini UV – quick cure", "Full kit – beginner friendly"],
    rating: 4.8,
    reviews: 1240,
    affiliateLink: "https://www.amazon.com/GAOY-Polish-Beginners-Colors-manicure/dp/B0D7M2LBD8?crid=2VOPRLCJORD63&dib=eyJ2IjoiMSJ9.u6FjGrlNPH0Y6PQs0OvL7tq7sjMel3yEJ90GqO7I8PYF7wx645zltUoHWeOKv2G7V5cEvogkBal1tkXvLSYyB16CF2w8OSK19vsceTWuqlVKWryY2DAY8edpZFqwj8XNbIGq_JnQv5myBlHxYLqChFUVaUIP5tKxuVv2kwJClBiX7F30eUcZ1UzQ6ljmNgzQHvxmEFs6G21UUyyu7iPN8FPH8Hrj5BhSR0APqsNYmTY.jlTSqAkYWEhzZW4RiF46vtp8nNwJdECdpwXLsgE4iLU&dib_tag=se&keywords=SEMILAC%2BLove%2BMe%2BNail%2BStarter%2BKit%2B%7C%2BProfessional%2BComplete%2BKit%2Bwith%2BLED%2BLamp%2B%2848W%2F24W%29%2B%7C%2BNeon%2BNail%2BPolish%2BKit%2B-%2BNeon%2BRed%2B317%2C%2BNeon%2BOrange%2B566%2C%2BNeon%2BRaspberry%2B042&nsdOptOutParam=true&psr=EY17&qid=1763741868&s=todays-deals&sprefix=semilac%2Blove%2Bme%2Bnail%2Bstarter%2Bkit%2Bprofessional%2Bcomplete%2Bkit%2Bwith%2Bled%2Blamp%2B48w%2F24w%2Bneon%2Bnail%2Bpolish%2Bkit%2B-%2Bneon%2Bred%2B317%2C%2Bneon%2Borange%2B566%2C%2Bneon%2Braspberry%2B042%2Ctodays-deals%2C346&sr=1-8-catcorr&th=1&linkCode=ll1&tag=nailsorials-20&linkId=1733bfbb2260f51466d92f9676ee3642&language=en_US&ref_=as_li_ss_tl"
  },
  {
    id: 'kit-saviland',
    name: "Complete Acrylic Nail Kit for Beginners with Lamp",
    price: 46.36,
    salePrice: 40.36,
    description: "Beginner-friendly acrylic nail kit with 180W lamp, nail drill, gel polish, powder, and full tools. Safe plant-based formula for creative DIY nail art.",
    images: [
        "https://m.media-amazon.com/images/I/81juTFCZI2L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/718oA2eeASL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71iVgRYFdzL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71FBRIcN9iL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61q4fbbuyLL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71tgdKOEIdL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71ooiSCgREL._SL1500_.jpg"
    ],
    features: ["Acrylic kit – beginner friendly", "180W lamp – fast cure", "Full tools – DIY creativity"],
    rating: 4.7,
    reviews: 980,
    affiliateLink: "https://www.amazon.com/Saviland-Acrylic-Nail-Kit-Drill/dp/B0C5R9XC27?crid=2A871MR1TRD4N&dib=eyJ2IjoiMSJ9.7aq6Far7_wUj3GIBigXpDDB_l8rOTqAf4OpoISnsDvV_91kvxlGtHQ203FoGP5NQGwtoKmAfQWk_nNLUzRW4n2ZS2DawIWQDoIRou1hkbeWuvGLADdFG1jxPsKX7Mc-ZrYm_R3j6vcIgvkiy7bl5XeCgMU13GhAiSZkxfSEKrH0_Z6Vqr_w64WkiQyobN5xQ4GnJRhEV00pa6jBJ502QXkHQXcOtKa80e5yMKBEMC1HXPh4CmO1bJksmTaeW_iEAReEwE9MeL6wAzG23RHapARq-qiumvx2leLowNcOPuIM.uhYX_ptkSY6XP0wjapnqXng1veggZPJfCjobmsAinrg&dib_tag=se&keywords=complet%2Bnail%2Bkit&qid=1763742493&sprefix=complet%2Bnail%2Caps%2C848&sr=8-7&th=1&linkCode=ll1&tag=nailsorials-20&linkId=16eaea5cccd637f10d409a8126fc124d&language=en_US&ref_=as_li_ss_tl"
  },
  {
    id: 'kit-cooserry',
    name: "Complete Acrylic Nail Kit for Beginners & UV Lamp",
    price: 90.99,
    salePrice: 44.99,
    description: "Professional beginner acrylic kit with UV lamp, nail drill, monomer, gel polish, and full tools. Perfect for home or salon DIY nail art.",
    images: [
        "https://m.media-amazon.com/images/I/81Wxc-LSJGL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/815UuvwqZ5L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71rnw+JXWuL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71kdDidgH+L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71RUP98OGCL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/717FZuF9MNL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81q1aKgZpeL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71eYizlTPSL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71bD+vBrf7L._SL1500_.jpg"
    ],
    features: ["Acrylic set – beginner friendly", "UV lamp – fast cure", "Full tools – DIY nails"],
    rating: 4.9,
    reviews: 1560,
    affiliateLink: "https://www.amazon.com/Acrylic-Nail-Kit-Beginners-Professional/dp/B0FSX8ZRX3?crid=2A871MR1TRD4N&dib=eyJ2IjoiMSJ9.bf0mZQ7-MiUKzFjAAU8CEEv1N5XpRqPb3yd9kaFiO2YoYr9JEqvW0pwj_3Oo1V6hoZDhD4XUkODKCnR60SOSzkGvEDVdD_TRAiweQK3O17eZ40kqX_aj_Z6eEWmiq3tB9kVbm9UHc86ViSLBZtY3Agq1mRup7ehtPMu_ZeFNjxSxw6Td9i0MOHLZu3fHc5CBKjPIs5V99S5XYqLqgUlDb5YQCA5invX8waOI3zMUhxVl1WMOQy71Vh7JT-diopp-H52a56-7fucu9HlIx-uVgRok33zp99hdK6qZju1zisw.eMpgNbm-GCi8XYYoLj0gjpaHCIpl-gVJ5QMg2dz_QHY&dib_tag=se&keywords=complet+nail+kit&qid=1763742808&refinements=p_36%3A4400-&rnid=386662011&sprefix=complet+nail%2Caps%2C848&sr=8-39&linkCode=ll1&tag=nailsorials-20&linkId=95ffabfd3cd2c43f29919a0979e551c4&language=en_US&ref_=as_li_ss_tl"
  }
];

const KitCard: React.FC<{ kit: typeof KITS[0] }> = ({ kit }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % kit.images.length);
        }, 2500); // 2.5 seconds interval

        return () => clearInterval(interval);
    }, [kit.images.length]);

    return (
        <div className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative aspect-square overflow-hidden bg-white">
                {kit.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`${kit.name} - view ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm border border-pink-100 z-10">
                  SAVE ${(kit.price - kit.salePrice).toFixed(2)}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow relative z-20 bg-gray-50">
                <div className="flex items-center space-x-1 mb-3">
                   <div className="flex text-yellow-400">
                     {[...Array(5)].map((_, i) => (
                       <StarIcon key={i} filled={true} className="w-4 h-4" />
                     ))}
                   </div>
                   <span className="text-xs text-gray-500 font-medium">({kit.reviews} Reviews)</span>
                </div>

                <h3 className="text-xl md:text-2xl font-tinos text-gray-900 mb-2 leading-tight">{kit.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{kit.description}</p>

                <ul className="space-y-3 mb-6 bg-white p-4 rounded-xl border border-gray-100">
                  {kit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                   <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-gray-900">${kit.salePrice.toFixed(2)}</span>
                    <span className="ml-2 text-lg text-gray-400 line-through">${kit.price.toFixed(2)}</span>
                  </div>
                  
                  <a href={kit.affiliateLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <button className="w-full bg-[#3e2336] text-white py-3.5 rounded-full font-bold tracking-wide hover:bg-pink-900 transition-colors shadow-lg hover:shadow-pink-900/20 transform hover:-translate-y-0.5 transition-all duration-200">
                        ADD TO CART
                      </button>
                  </a>
                </div>
            </div>
        </div>
    );
};

export const BuildKitPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-tinos text-gray-900 sm:text-5xl mb-4">
            Build Your Kit
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Curated bundles designed for every level of artistry. Save up to 30% when you bundle these exclusive sets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KITS.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
        
        <div className="mt-16 bg-pink-50 rounded-2xl p-8 md:p-12 text-center border border-pink-100">
            <h2 className="text-2xl font-tinos mb-4 text-gray-900">Need help choosing your kit?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">Our nail experts are here to guide you to the perfect kit for your goals, whether you are a complete beginner or a seasoned pro.</p>
            <button className="text-pink-700 font-bold hover:text-pink-900 underline decoration-2 underline-offset-4 tracking-wide">
                Chat with a Nailsorials Expert
            </button>
        </div>
      </div>
    </div>
  );
};
