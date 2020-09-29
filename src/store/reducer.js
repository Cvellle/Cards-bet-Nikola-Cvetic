const allCards = [
  // { number: 14, sign: "clubs", shown: false, id: 1},
  // { number: 14, sign: "diamonds", shown: false, id: 1},
  // { number: 14, sign: "hearts", shown: false, id: 1},
  // { number: 14, sign: "spades", shown: false, id: 1},
  // { number: 13, sign: "clubs", shown: false, id: 1},
  // { number: 13, sign: "diamonds", shown: false, id: 1},
  // { number: 13, sign: "hearts", shown: false, id: 1},
  // { number: 13, sign: "spades", shown: false, id: 1},
  // { number: 12, sign: "clubs", shown: false, id: 1},
  // { number: 12, sign: "diamonds", shown: false, id: 1},
  // { number: 12, sign: "hearts", shown: false, id: 1},
  // { number: 12, sign: "spades", shown: false, id: 1},
  { number: 10, sign: "clubs", shown: false, id: 41 },
  { number: 10, sign: "diamonds", shown: false, id: 40 },
  { number: 10, sign: "hearts", shown: false, id: 39 },
  { number: 10, sign: "spades", shown: false, id: 38 },
  { number: 9, sign: "clubs", shown: false, id: 37 },
  { number: 9, sign: "diamonds", shown: false, id: 36 },
  { number: 9, sign: "hearts", shown: false, id: 35 },
  { number: 9, sign: "spades", shown: false, id: 34 },
  { number: 8, sign: "clubs", shown: false, id: 33 },
  { number: 8, sign: "diamonds", shown: false, id: 32 },
  { number: 8, sign: "hearts", shown: false, id: 31 },
  { number: 8, sign: "spades", shown: false, id: 30 },
  { number: 7, sign: "clubs", shown: false, id: 29 },
  { number: 7, sign: "diamonds", shown: false, id: 28 },
  { number: 7, sign: "hearts", shown: false, id: 27 },
  { number: 7, sign: "spades", shown: false, id: 26 },
  { number: 6, sign: "clubs", shown: false, id: 25 },
  { number: 6, sign: "diamonds", shown: false, id: 24 },
  { number: 6, sign: "hearts", shown: false, id: 23 },
  { number: 6, sign: "spades", shown: false, id: 22 },
  { number: 5, sign: "clubs", shown: false, id: 21 },
  { number: 5, sign: "diamonds", shown: false, id: 20 },
  { number: 5, sign: "hearts", shown: false, id: 19 },
  { number: 5, sign: "spades", shown: false, id: 18 },
  { number: 4, sign: "clubs", shown: false, id: 17 },
  { number: 4, sign: "diamonds", shown: false, id: 16 },
  { number: 4, sign: "hearts", shown: false, id: 15 },
  { number: 4, sign: "spades", shown: false, id: 14 },
  { number: 3, sign: "clubs", shown: false, id: 13 },
  { number: 3, sign: "diamonds", shown: false, id: 12 },
  { number: 3, sign: "hearts", shown: false, id: 10 },
  { number: 3, sign: "spades", shown: false, id: 9 },
  { number: 2, sign: "clubs", shown: false, id: 8 },
  { number: 2, sign: "diamonds", shown: false, id: 7 },
  { number: 2, sign: "hearts", shown: false, id: 6 },
  { number: 2, sign: "spades", shown: false, id: 5 },
  { number: 1, sign: "clubs", shown: false, id: 4 },
  { number: 1, sign: "diamonds", shown: false, id: 3 },
  { number: 1, sign: "hearts", shown: false, id: 2 },
  { number: 1, sign: "spades", shown: false, id: 1 },
];

const initialState = {
  notShown: allCards,
  shown: [],
  cards: allCards,
  allCoins: 100,
  start: true,
  firstStart: false,
  success: false,
  hiddenCard: false,
  comparing: false,
  reset: false,
  guessedCards: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_UNSHOWN":
      const notShown = state.notShown.filter((ob) => ob.id !== action.toRemove);
      return { ...state, notShown };
    case "SET_SHOWN":
      return { ...state, shown: [...state.shown, action.toShown] };
    case "RESET_UNSHOWN":
      return { ...state, notShown: state.cards };
    case "RESET_SHOWN":
      return { ...state, shown: [] };
    case "SET_GUESSED":
      return {
        ...state,
        guessedCards: [...state.guessedCards, action.toGuessed],
      };
    case "SET_START":
      return { ...state, start: action.startChange };
    case "FIRST_START":
      return { ...state, firstStart: action.fstart };
    case "SET_SUCCESS":
      return { ...state, success: action.successChange };
    case "SET_RESET":
      return { ...state, reset: action.reseted };
    case "SHOW_CARD":
      return { ...state, hiddenCard: action.changeHidden };
    case "START_COMPARING":
      return { ...state, comparing: action.compare };
    default:
      return state;
  }
};

// case "SET_LOADING":
//   return { ...state, loading: action.loading };
// case "SET_ITEMS":
//   return { ...state, items: action.items };
// case "SET_FILTERED":
//   return { ...state, filtered: action.filtered };
// case "FILTER_BY_CATEGORY":
//   const filtered = state.items.filter((ob) =>
//     ob.category.toLowerCase().includes(action.category)
//   );
//   return { ...state, filtered };
// case "FILTER_ITEMS":
//   const filtered2 = state.filtered.filter((ob) =>
//     ob.name.toLowerCase().includes(action.critreria)
//   );
//   return { ...state, filtered2 };
// case "FILTER_ITEMS_SEARCH":
//   const filteredInSearch = state.items.filter((ob) =>
//     ob.name.toLowerCase().includes(action.fiterSearch)
//   );
//   return { ...state, filteredInSearch };
// case "FILTER_BY_CAT_IN_SEARCH":
//   const filteredByCatInSearch = state.filteredInSearch.filter((ob) =>
//     ob.category.toLowerCase().includes(action.ctg)
//   );
//   return { ...state, filteredByCatInSearch };
// case "SELECT_ITEM":
//   return { ...state, selected: action.selected };
// case "SET_SEARCH_TRUE":
//   return { ...state, searchTrue: action.setSearch };
// case "SHOW_SEARCH_DESC":
//   return { ...state, searchDescritopn: action.searchDesc };
// case "ABOUT_SCROLL":
//   return { ...state, aboutScroll: action.about };
// case "CONTACT_SCROLL":
//   return { ...state, contactScroll: action.contact };
// case "HOME_SCROLL":
//   return { ...state, homeScroll: action.homescr };
