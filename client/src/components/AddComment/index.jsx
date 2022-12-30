import React from "react";
import {useDispatch} from 'react-redux';

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { addComment } from '../../redux/slices/posts';

export const Index = ({
  idPost
}) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  const onClickAdd = () => {
    dispatch(addComment(idPost,{ text: text }));
  };

  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className={styles.form}>
          <TextField
            label="Jätä kommentti"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained" onClick={onClickAdd}>Lähetä</Button>
        </div>
      </div>
    </>
  );
};
