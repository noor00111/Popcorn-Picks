import { FaTicketAlt, FaPlay, FaGift } from "react-icons/fa";

export const MOVIES = [
  { title: "The Marvels",          img: "https://i.ibb.co.com/n0MzKtf/themarvels-lob-mas-mob-03.jpg",                                                                                 desc: "Cosmic power meets unstoppable teamwork." },
  { title: "Elemental",            img: "https://i.ibb.co.com/tDx5tM6/Winter-Elemental.webp",                                                                                          desc: "Opposites attract in a world where fire and water collide." },
  { title: "Wish",                 img: "https://i.ibb.co.com/0B5244n/p-disney-wish-2993-f80fee96.jpg",                                                                                desc: "When stars fall, a new magical journey begins." },
  { title: "Luca",                 img: "https://i.ibb.co.com/gzsrNLJ/images.jpg",                                                                                                     desc: "A sea of secrets, a summer of friendship." },
  { title: "Turning Red",          img: "https://i.ibb.co.com/jJrMZp4/pp-turningred-herobanner-mobile-21513-af22610c.jpg",                                                             desc: "Embrace the panda within on a wild journey of growing up." },
  { title: "Minions: Rise of Gru", img: "https://i.ibb.co.com/PwrNXXs/MV5-BNj-Zl-Zj-U0-NTUt-NDlm-NC00-Mjkx-LWI3-Yz-It-ZGJm-Mm-U2-OWZh-Y2-Jh-Xk-Ey-Xk-Fqc-Gde-QXZ3-ZXNs-ZXk.jpg", desc: "The untold mischief of a young villain in the making." },
  { title: "Oppenheimer",          img: "https://i.ibb.co.com/w0rzPkT/flat-750x-075-f-pad-750x1000-f8f8f8.jpg",                                                                        desc: "The mind that shaped the future and the blast that changed history." },
  { title: "Weathering With You",  img: "https://i.ibb.co.com/88W6ryJ/eaksslfxsayjtxb.jpg",                                                                                            desc: "A love story written in the rain and the clouds." },
  { title: "Over the Moon",        img: "https://i.ibb.co.com/r0P4GpQ/MV5-BZj-M2-YTI0-Y2-Ut-Nz-I3-NS00-NDZj-LWIw-NWUt-Zjk0-MTg3-MGFk-NDNk-Xk-Ey-Xk-Fqc-Gc-V1.jpg",               desc: "Reach for the stars and discover the power of love." },
];

export const PROMOS = [
  {
    icon: FaTicketAlt,
    img: "https://i.ibb.co.com/17rW3gM/2148670006.jpg",
    title: "Exclusive Ticket Discounts",
    desc: "Get 20% off on all weekend movie tickets with PartnerX. Limited time offer.",
    code: "MOVIE20",
    accent: { text: "#16a34a", bg: "rgba(22,163,74,0.10)", border: "rgba(22,163,74,0.25)", glow: "rgba(22,163,74,0.12)" },
    label: "20% OFF",
  },
  {
    icon: FaPlay,
    img: "https://i.ibb.co.com/ZYZM2nP/133636.jpg",
    title: "Streaming Subscription Offer",
    desc: "Enjoy 1 month free on StreamFlix when you sign up today. No credit card needed.",
    code: "STREAMFREE",
    accent: { text: "#2563eb", bg: "rgba(37,99,235,0.10)", border: "rgba(37,99,235,0.25)", glow: "rgba(37,99,235,0.12)" },
    label: "1 Month Free",
  },
  {
    icon: FaGift,
    img: "https://i.ibb.co.com/Dkgrj87/rb-154138.png",
    title: "Popcorn Combo Deal",
    desc: "Buy 1 get 1 free popcorn combo at CineMax. Perfect for date night.",
    code: "POPCORN",
    accent: { text: "#d97706", bg: "rgba(245,197,24,0.10)", border: "rgba(245,197,24,0.28)", glow: "rgba(245,197,24,0.12)" },
    label: "BOGO Free",
  },
];