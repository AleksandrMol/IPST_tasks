import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFoldersState } from '../types';
import { RootState } from '../../app/store';

export const fetchGetFolder = createAsyncThunk(
    'desk/fetchGetFolder',
    async(token: string) => {
        const response = await axios.get(`http://91.193.183.139:7000/drive/folder/root`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }).then((res) => {
            const data = res.data.data;
            return data;
        });
        return response;
    }
);

const foldersAdapter = createEntityAdapter();

const foldersState: IFoldersState = { // начальное состояние
    data: {
        id: "",
        name: "",
        children: []
    },
};

export const foldersSlice = createSlice({
    name: 'Folders',
    initialState: foldersAdapter.getInitialState(foldersState),
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetFolder.pending, (state) => { //процесс загрузки
            state.data.id = "loading";
            console.log("loading");
        })
        .addCase(fetchGetFolder.fulfilled, (state, action) => { // если загрузка успешна, обновляю состояние 
            console.log("fulfilled");
            state.data = action.payload;
            console.log(state.data);
        })
        .addCase(fetchGetFolder.rejected, (state) => { // если ошибка
            state.data.id = "error";
            console.log("error");
            return
        });
    },
});

export const foldersData = (state: RootState) => state.foldersData;

export default foldersSlice.reducer