import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { TPostParams } from '../types';

export const fetchRegister = createAsyncThunk(
    'desk/fetchRegister',
    async(params: TPostParams) => {
        const response = await axios.post(params.link, params.fields).then((res) => { //получаю данные с сервера, и тут же их упорядочиваю, как мне удобно.
            const token: string = res.data.token;
            return token;
        });
        return response;
    }
);

const registerAdapter = createEntityAdapter();

const registerState = { // начальное состояние
    token: "",
}

export const registerSlice = createSlice({
    name: 'Register',
    initialState: registerAdapter.getInitialState(registerState),
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRegister.pending, (state) => { //процесс загрузки
            state.token = "loading";
            console.log("Register " + state.token)
        })
        .addCase(fetchRegister.fulfilled, (state, action) => { // если загрузка успешна, обновляю состояние 
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
            console.log("Register " + state.token)
        })
        .addCase(fetchRegister.rejected, (state) => { // если ошибка
            state.token = "error";
            console.log("Register " + state.token)
        });
    },
});

export const registerToken = (state: RootState) => state.token;

export default registerSlice.reducer