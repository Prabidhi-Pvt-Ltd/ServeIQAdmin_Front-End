// src/data/languages.ts
import React from "react";

export const languages = [
  {
    code: "en",
    name: "English",
    flag: (
      <svg viewBox="0 0 640 480" width="20" height="14">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="M75 0l245 181L565 0h75v62L402 241l238 178v61h-77L320 299 82 480H0v-60l237-178L0 61V0h75z"
        />
        <path
          fill="#C8102E"
          d="M424 281l216 159v40L369 281h55zM240 299l8 46L48 480H0l240-181zM640 0v3L391 185l3-47L583 0h57zM0 0l239 176h-60L0 42V0z"
        />
        <path fill="#FFF" d="M240 0v480h160V0H240zM0 160v160h640V160H0z" />
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h94V0h-94z" />
      </svg>
    ),
  },
  {
    code: "ar",
    name: "عربي",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="24"
        height="16"
      >
        <path fill="#74acdf" d="M0 0h512v512H0z" />
        <path fill="#fff" d="M0 170.7h512v170.7H0z" />
        <circle
          cx="256"
          cy="256"
          r="28.4"
          fill="#f6b40e"
          stroke="#85340a"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    code: "bn",
    name: "বাংলা",
    flag: (
      <svg viewBox="0 0 512 512" width="20" height="14">
        <path fill="#006a4e" d="M0 0h512v512H0z" />
        <circle cx="230" cy="256" r="120" fill="#f42a41" />
      </svg>
    ),
  },
  {
    code: "fr",
    name: "Française",
    flag: (
      <svg viewBox="0 0 3 2" width="20" height="14">
        <path fill="#0055A4" d="M0 0h1v2H0z" />
        <path fill="#fff" d="M1 0h1v2H1z" />
        <path fill="#EF4135" d="M2 0h1v2H2z" />
      </svg>
    ),
  },
  {
    code: "de",
    name: "Deutsch",
    flag: (
      <svg viewBox="0 0 5 3" width="20" height="14">
        <path fill="#000" d="M0 0h5v1H0z" />
        <path fill="#D00" d="M0 1h5v1H0z" />
        <path fill="#FFCE00" d="M0 2h5v1H0z" />
      </svg>
    ),
  },
  {
    code: "hi",
    name: "हिंदी",
    flag: (
      <svg viewBox="0 0 9 6" width="20" height="14">
        <path fill="#FF9933" d="M0 0h9v2H0z" />
        <path fill="#fff" d="M0 2h9v2H0z" />
        <path fill="#128807" d="M0 4h9v2H0z" />
        <circle
          cx="4.5"
          cy="3"
          r="0.6"
          fill="none"
          stroke="#000080"
          strokeWidth="0.2"
        />
      </svg>
    ),
  },
  {
    code: "it",
    name: "Italiana",
    flag: (
      <svg viewBox="0 0 3 2" width="20" height="14">
        <path fill="#009246" d="M0 0h1v2H0z" />
        <path fill="#fff" d="M1 0h1v2H1z" />
        <path fill="#ce2b37" d="M2 0h1v2H2z" />
      </svg>
    ),
  },
  {
    code: "ja",
    name: "日本語",
    flag: (
      <svg viewBox="0 0 3 2" width="20" height="14">
        <path fill="#fff" d="M0 0h3v2H0z" />
        <circle cx="1.5" cy="1" r="0.5" fill="#bc002d" />
      </svg>
    ),
  },
  {
    code: "pa",
    name: "ਪੰਜਾਬੀ",
    flag: (
      <svg viewBox="0 0 512 512" width="20" height="14">
        <path fill="#01411C" d="M0 0h512v512H0z" />
        <circle cx="256" cy="256" r="100" fill="#fff" />
      </svg>
    ),
  },
  {
    code: "ko",
    name: "한국인",
    flag: (
      <svg viewBox="0 0 512 512" width="20" height="14">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <circle cx="256" cy="256" r="100" fill="#cd2e3a" />
        <circle cx="256" cy="256" r="60" fill="#0047a0" />
      </svg>
    ),
  },
  {
    code: "mr",
    name: "मराठी",
    flag: (
      <svg viewBox="0 0 9 6" width="20" height="14">
        <path fill="#FF9933" d="M0 0h9v2H0z" />
        <path fill="#fff" d="M0 2h9v2H0z" />
        <path fill="#128807" d="M0 4h9v2H0z" />
        <circle
          cx="4.5"
          cy="3"
          r="0.6"
          fill="none"
          stroke="#000080"
          strokeWidth="0.2"
        />
      </svg>
    ),
  },
  {
    code: "pt",
    name: "Português",
    flag: (
      <svg viewBox="0 0 6 4" width="20" height="14">
        <path fill="#006600" d="M0 0h2v4H0z" />
        <path fill="#ff0000" d="M2 0h4v4H2z" />
        <circle cx="2" cy="2" r="0.6" fill="#ffcc00" />
      </svg>
    ),
  },
  {
    code: "ta",
    name: "தமிழ்",
    flag: (
      <svg viewBox="0 0 6 4" width="20" height="14">
        <path fill="#FF9933" d="M0 0h6v1.33H0z" />
        <path fill="#fff" d="M0 1.33h6v1.33H0z" />
        <path fill="#128807" d="M0 2.66h6v1.34H0z" />
        <circle cx="3" cy="2" r="0.3" fill="#000080" />
      </svg>
    ),
  },
  {
    code: "te",
    name: "తెలుగు",
    flag: (
      <svg viewBox="0 0 9 6" width="20" height="14">
        <path fill="#FF9933" d="M0 0h9v2H0z" />
        <path fill="#fff" d="M0 2h9v2H0z" />
        <path fill="#128807" d="M0 4h9v2H0z" />
        <circle
          cx="4.5"
          cy="3"
          r="0.6"
          fill="none"
          stroke="#000080"
          strokeWidth="0.2"
        />
      </svg>
    ),
  },
  {
    code: "np",
    name: "नेपाली",
    flag: (
      <svg viewBox="0 0 512 512" width="20" height="14">
        <path fill="#DC143C" d="M0 0v512l512-256z" />
        <path fill="#003893" d="M35 35v442l442-221z" />
        <circle cx="160" cy="180" r="60" fill="#fff" />
        <path fill="#fff" d="M120 340c10-30 40-50 70-50s60 20 70 50H120z" />
      </svg>
    ),
  },
];
