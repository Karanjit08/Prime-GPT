import { createSlice } from "@reduxjs/toolkit";


var userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state,action) => {
            return action.payload;
        },
        clearUser: (state,action) => {
            return null;
        }
    }
});


export var {setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;