import { Grid } from '@mui/material';
import { EntityState } from '@reduxjs/toolkit';
import React from 'react';
import { IFoldersState } from '../../../features/types';
import { Accordion } from '../../Accordion';
import { FileComponent } from '../../FileComponent';
import { FolderComponent } from '../../FolderComponent';
import './cells.css';

interface ICellsProps{
  folders: EntityState<unknown> & IFoldersState
}

export function Cells({folders}: ICellsProps) {
  return (
    <>
            <Accordion open= {true} header='Folders'>
              <Grid container>
                {
                  folders.data.children.map((el) => {
                    if(el.type === "folder"){
                      return (
                        <Grid key={el.id} item xs={3} p={2}>
                          <FolderComponent id = {el.id} name = {el.name} parentId = {folders.data.id}/> 
                        </Grid>
                      )
                    }
                  })
                }
              </Grid>
            </Accordion>

            <Accordion open= {false} header='Files'>
              <Grid container>
                {
                  folders.data.children.map((el) => {
                    if(el.type === "file"){
                      return (
                        <Grid key={el.id} item xs={3} p={2}>
                          <FileComponent id = {el.id} name = {el.file.name} filepath = {el.file.filepath} parentId = {folders.data.id}/>
                        </Grid>
                      )
                    }
                  })
                }
              </Grid>
            </Accordion>
          </>
  );
}
