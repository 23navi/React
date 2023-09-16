import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

const reset = createAction("app/reset");

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      if (index > -1) {
        // only splice array when item is found
        state.splice(index, 1);
      }
    }
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      if (index > -1) {
        // only splice array when item is found
        state.splice(index, 1);
      }
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer
  }
});

// Way one -> Manually
// store.dispatch({ type: "song/addSong", payload: "navi" });

// Way two -> Taking help from redux-toolkit to create actions
// store.dispatch(songSlice.actions.addSong("navi2"));

const { addSong, removeSong } = songSlice.actions;

const { addMovie, removeMovie } = movieSlice.actions;

export { store, addSong, removeSong, addMovie, removeMovie };
